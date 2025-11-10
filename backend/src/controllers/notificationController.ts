import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../middlewares/authMiddleware.js';
import { listNotifications, markNotificationAsRead } from '../services/notificationService.js';

export const listUserNotifications = async (req: Request, res: Response) => {
  const userId = (req as AuthenticatedRequest).user?.id;
  if (!userId) {
    return res.status(401).json({ message: 'Authentification requise' });
  }
  const notifications = await listNotifications(userId);
  res.json(notifications);
};

export const markAsRead = async (req: Request, res: Response) => {
  const userId = (req as AuthenticatedRequest).user?.id;
  if (!userId) {
    return res.status(401).json({ message: 'Authentification requise' });
  }
  await markNotificationAsRead(req.params.notificationId, userId);
  res.status(204).send();
};
