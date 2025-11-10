import argon2 from 'argon2';
import { addHours, addDays, isAfter } from 'date-fns';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import prisma from '../config/prisma.js';
import {
  generateAccessToken,
  generateRefreshToken,
  generateResetToken,
  verifyRefreshToken
} from '../utils/tokens.js';
import { sendMail } from '../utils/email.js';
import env from '../config/env.js';
import { logger } from '../utils/logger.js';
import type { UserRoleValue } from '../types/enums.js';

export const registerUser = async (data: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  company?: string;
  role?: UserRoleValue;
}) => {
  const passwordHash = await argon2.hash(data.password);

  try {
    const user = await prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        company: data.company,
        role: data.role ?? 'CLIENT',
        clientProfile: data.role === 'CLIENT' || !data.role ? { create: {} } : undefined,
        driverProfile:
          data.role === 'DRIVER'
            ? {
                create: {
                  licenseNumber: `TEMP-${Date.now()}`,
                  licenseExpiry: addDays(new Date(), 365)
                }
              }
            : undefined
      }
    });

    return user;
  } catch (error: unknown) {
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
      throw new Error('Un compte existe déjà avec cet email');
    }
    logger.error('Erreur création utilisateur', error);
    throw error;
  }
};

export const authenticateUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('Identifiants invalides');
  }

  const isValid = await argon2.verify(user.passwordHash, password);
  if (!isValid) {
    throw new Error('Identifiants invalides');
  }

  const accessToken = generateAccessToken(user.id, user.role);
  const refreshToken = generateRefreshToken(user.id, user.role);

  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      userId: user.id,
      expiresAt: addDays(new Date(), 7)
    }
  });

  return { user, accessToken, refreshToken };
};

export const refreshAuthTokens = async (token: string) => {
  try {
    const payload = verifyRefreshToken(token);
    const stored = await prisma.refreshToken.findUnique({ where: { token } });
    if (!stored || isAfter(new Date(), stored.expiresAt)) {
      throw new Error('Token expiré');
    }

    const user = await prisma.user.findUnique({ where: { id: stored.userId } });
    if (!user) {
      throw new Error('Utilisateur introuvable');
    }

    const accessToken = generateAccessToken(user.id, user.role);
    const refreshToken = generateRefreshToken(user.id, user.role);

    await prisma.refreshToken.update({
      where: { token },
      data: {
        token: refreshToken,
        expiresAt: addDays(new Date(), 7)
      }
    });

    return { accessToken, refreshToken };
  } catch (error) {
    logger.error('Erreur refresh token', error);
    throw new Error('Token invalide');
  }
};

export const revokeRefreshToken = async (token: string) => {
  await prisma.refreshToken.deleteMany({ where: { token } });
};

export const requestPasswordReset = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return;
  }

  const token = generateResetToken();
  const expiresAt = addHours(new Date(), 2);

  await prisma.passwordResetToken.create({
    data: {
      token,
      userId: user.id,
      expiresAt
    }
  });

  const resetLink = `${env.APP_URL}/reset-password?token=${token}`;
  await sendMail({
    to: user.email,
    subject: 'Réinitialisation de votre mot de passe',
    html: `<p>Bonjour ${user.firstName},</p><p>Utilisez le lien suivant pour réinitialiser votre mot de passe : <a href="${resetLink}">${resetLink}</a></p>`
  });
};

export const resetPassword = async (token: string, password: string) => {
  const resetToken = await prisma.passwordResetToken.findUnique({ where: { token } });
  if (!resetToken || resetToken.used || isAfter(new Date(), resetToken.expiresAt)) {
    throw new Error('Token invalide');
  }

  const passwordHash = await argon2.hash(password);
  await prisma.$transaction([
    prisma.user.update({ where: { id: resetToken.userId }, data: { passwordHash } }),
    prisma.passwordResetToken.update({ where: { token }, data: { used: true } })
  ]);
};
