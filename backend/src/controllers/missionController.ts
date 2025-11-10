import { Request, Response } from 'express';
import {
  assignDriver,
  createMission,
  listMissions,
  listMissionsForDriverUser,
  updateMissionStatus
} from '../services/missionService.js';
import { AuthenticatedRequest } from '../middlewares/authMiddleware.js';

export const create = async (req: Request, res: Response) => {
  const mission = await createMission(req.body);
  res.status(201).json(mission);
};

export const list = async (req: Request, res: Response) => {
  const { status, driverProfileId, clientId } = req.query;
  const missions = await listMissions({
    status: status as any,
    driverProfileId: driverProfileId as string | undefined,
    clientId: clientId as string | undefined
  });
  res.json(missions);
};

export const updateStatus = async (req: Request, res: Response) => {
  const mission = await updateMissionStatus(req.params.missionId, req.body);
  res.json(mission);
};

export const assign = async (req: Request, res: Response) => {
  const mission = await assignDriver(req.params.missionId, req.body);
  res.json(mission);
};

export const listForCurrentDriver = async (req: Request, res: Response) => {
  const driverUserId = (req as AuthenticatedRequest).user?.id;
  if (!driverUserId) {
    return res.status(401).json({ message: 'Authentification requise' });
  }
  const missions = await listMissionsForDriverUser(driverUserId);
  res.json(missions);
};
