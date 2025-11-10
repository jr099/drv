import { Request, Response } from 'express';
import {
  registerUser,
  authenticateUser,
  refreshAuthTokens,
  revokeRefreshToken,
  requestPasswordReset,
  resetPassword
} from '../services/authService.js';
import { loginSchema, passwordResetRequestSchema, passwordResetSchema, registerSchema } from '../utils/validation.js';

export const register = async (req: Request, res: Response) => {
  const data = registerSchema.parse(req.body);
  const user = await registerUser(data);
  res.status(201).json({
    message: 'Compte créé avec succès',
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role
    }
  });
};

export const login = async (req: Request, res: Response) => {
  const data = loginSchema.parse(req.body);
  const { user, accessToken, refreshToken } = await authenticateUser(data.email, data.password);
  res.json({
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role
    },
    tokens: {
      accessToken,
      refreshToken
    }
  });
};

export const refreshToken = async (req: Request, res: Response) => {
  const { token } = req.body as { token: string };
  if (!token) {
    return res.status(400).json({ message: 'Token requis' });
  }
  const tokens = await refreshAuthTokens(token);
  res.json(tokens);
};

export const logout = async (req: Request, res: Response) => {
  const { token } = req.body as { token: string };
  if (token) {
    await revokeRefreshToken(token);
  }
  res.status(204).send();
};

export const requestReset = async (req: Request, res: Response) => {
  const { email } = passwordResetRequestSchema.parse(req.body);
  await requestPasswordReset(email);
  res.json({ message: 'Si un compte existe, un email a été envoyé.' });
};

export const reset = async (req: Request, res: Response) => {
  const { token, password } = passwordResetSchema.parse(req.body);
  await resetPassword(token, password);
  res.json({ message: 'Mot de passe mis à jour' });
};
