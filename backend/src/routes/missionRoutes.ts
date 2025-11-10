import { Router } from 'express';
import * as missionController from '../controllers/missionController.js';
import { authenticate, authorize } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', authenticate, authorize('ADMIN', 'MANAGER'), missionController.create);
router.get('/', authenticate, missionController.list);
router.get('/me', authenticate, missionController.listForCurrentDriver);
router.patch('/:missionId/status', authenticate, authorize('ADMIN', 'MANAGER', 'DRIVER'), missionController.updateStatus);
router.post('/:missionId/assign', authenticate, authorize('ADMIN', 'MANAGER'), missionController.assign);

export default router;
