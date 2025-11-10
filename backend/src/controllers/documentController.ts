import { Request, Response } from 'express';
import { saveDocumentMetadata, listMissionDocuments } from '../services/documentService.js';

export const upload = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Fichier requis' });
  }
  const document = await saveDocumentMetadata({
    fileName: req.file.filename,
    fileType: req.file.mimetype,
    missionId: req.body.missionId,
    quoteId: req.body.quoteId,
    driverProfileId: req.body.driverProfileId
  });
  res.status(201).json(document);
};

export const listMissionFiles = async (req: Request, res: Response) => {
  const documents = await listMissionDocuments(req.params.missionId);
  res.json(documents);
};
