import { Router } from 'express';
import multer from 'multer';
import crypto from 'crypto';
import path from 'path';
import env from '../config/env.js';
import { ensureStorage } from '../utils/storage.js';
import * as documentController from '../controllers/documentController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

ensureStorage();

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, env.STORAGE_PATH),
  filename: (_req, file, cb) => {
    const uniqueName = `${crypto.randomUUID()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

const router = Router();

router.post('/', authenticate, upload.single('file'), documentController.upload);
router.get('/mission/:missionId', authenticate, documentController.listMissionFiles);

export default router;
