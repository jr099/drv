import prisma from '../config/prisma.js';

export const notifyUser = async (userId: string, title: string, body: string) =>
  prisma.notification.create({
    data: {
      userId,
      title,
      body
    }
  });

export const listNotifications = async (userId: string) =>
  prisma.notification.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' }
  });

export const markNotificationAsRead = async (notificationId: string, userId: string) =>
  prisma.notification.updateMany({
    where: { id: notificationId, userId },
    data: { read: true }
  });
