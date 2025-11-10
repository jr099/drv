import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { logger } from '../utils/logger.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  logger.error('Erreur API', err);

  if (err instanceof ZodError) {
    return res.status(400).json({
      message: 'Erreur de validation',
      details: err.flatten()
    });
  }

  return res.status(500).json({ message: 'Erreur interne du serveur' });
};
