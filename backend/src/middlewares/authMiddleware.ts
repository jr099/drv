import { NextFunction, Request, Response } from 'express';
import { verifyAccessToken } from '../utils/tokens.js';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

export const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ message: 'Token manquant' });
  }

  const [, token] = header.split(' ');
  if (!token) {
    return res.status(401).json({ message: 'Token invalide' });
  }

  try {
    const payload = verifyAccessToken(token);
    req.user = { id: payload.sub as string, role: payload.role as string };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Authentification requise' });
  }
};

export const authorize = (...roles: string[]) => (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Authentification requise' });
  }

  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Accès refusé' });
  }

  next();
};
