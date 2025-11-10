import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import env from '../config/env.js';

type JwtPayload = {
  sub: string;
  role: string;
};

export const generateAccessToken = (userId: string, role: string) =>
  jwt.sign({ sub: userId, role } satisfies JwtPayload, env.JWT_SECRET, { expiresIn: '15m' });

export const generateRefreshToken = (userId: string, role: string) =>
  jwt.sign({ sub: userId, role } satisfies JwtPayload, env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

export const generateResetToken = () => crypto.randomBytes(32).toString('hex');

export const verifyAccessToken = (token: string) => jwt.verify(token, env.JWT_SECRET) as JwtPayload & jwt.JwtPayload;

export const verifyRefreshToken = (token: string) =>
  jwt.verify(token, env.REFRESH_TOKEN_SECRET) as JwtPayload & jwt.JwtPayload;
