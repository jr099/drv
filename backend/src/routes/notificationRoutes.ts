import { Router } from 'express';
import * as notificationController from '../controllers/notificationController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', authenticate, notificationController.listUserNotifications);
router.post('/:notificationId/read', authenticate, notificationController.markAsRead);

export default router;
