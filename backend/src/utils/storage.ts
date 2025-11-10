import fs from 'fs';
import path from 'path';
import env from '../config/env.js';

export const ensureStorage = () => {
  if (!fs.existsSync(env.STORAGE_PATH)) {
    fs.mkdirSync(env.STORAGE_PATH, { recursive: true });
  }
};

export const buildFilePath = (fileName: string) => path.join(env.STORAGE_PATH, fileName);
