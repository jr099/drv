import { Router } from 'express';
import authRoutes from './authRoutes.js';
import quoteRoutes from './quoteRoutes.js';
import missionRoutes from './missionRoutes.js';
import notificationRoutes from './notificationRoutes.js';
import documentRoutes from './documentRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/quotes', quoteRoutes);
router.use('/missions', missionRoutes);
router.use('/notifications', notificationRoutes);
router.use('/documents', documentRoutes);

export default router;
