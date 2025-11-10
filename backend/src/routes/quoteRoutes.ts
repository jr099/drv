import { Router } from 'express';
import * as quoteController from '../controllers/quoteController.js';
import { authenticate, authorize } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', quoteController.createQuote);
router.get('/', authenticate, authorize('ADMIN', 'MANAGER'), quoteController.getQuotes);
router.patch('/:quoteId/status', authenticate, authorize('ADMIN', 'MANAGER'), quoteController.changeQuoteStatus);

export default router;
