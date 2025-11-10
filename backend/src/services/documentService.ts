import fs from 'fs';
import path from 'path';
import prisma from '../config/prisma.js';
import { buildFilePath, ensureStorage } from '../utils/storage.js';

export const saveDocumentMetadata = async (params: {
  fileName: string;
  fileType: string;
  missionId?: string;
  quoteId?: string;
  driverProfileId?: string;
}) => {
  ensureStorage();
  return prisma.document.create({
    data: {
      fileName: params.fileName,
      fileType: params.fileType,
      filePath: buildFilePath(params.fileName),
      missionId: params.missionId,
      quoteId: params.quoteId,
      driverProfileId: params.driverProfileId
    }
  });
};

export const deleteDocument = async (documentId: string) => {
  const document = await prisma.document.findUnique({ where: { id: documentId } });
  if (!document) return;
  await prisma.document.delete({ where: { id: documentId } });
  if (fs.existsSync(document.filePath)) {
    fs.unlinkSync(document.filePath);
  }
};

export const listMissionDocuments = async (missionId: string) =>
  prisma.document.findMany({ where: { missionId } });

export const getDocumentStream = (filePath: string) => fs.createReadStream(path.resolve(filePath));
