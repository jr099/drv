import prisma from '../config/prisma.js';
import { missionCreationSchema, missionStatusSchema, assignDriverSchema } from '../utils/validation.js';
import { logger } from '../utils/logger.js';
import {
  MissionEventType,
  MissionStatus,
  type MissionStatusValue
} from '../types/enums.js';

export const createMission = async (payload: unknown) => {
  const data = missionCreationSchema.parse(payload);

  const mission = await prisma.mission.create({
    data: {
      reference: `JR-${Date.now()}`,
      clientId: data.clientId,
      driverProfileId: data.driverProfileId,
      managerId: data.managerId,
      vehicleType: data.vehicleType,
      vehiclePlate: data.vehiclePlate,
      pickupAddress: data.pickupAddress,
      dropoffAddress: data.dropoffAddress,
      pickupDate: data.pickupDate,
      deliveryDate: data.deliveryDate,
      distanceKm: data.distanceKm,
      estimatedPrice: data.estimatedPrice,
      actualPrice: data.actualPrice,
      notes: data.notes,
      events: {
        create: {
          type: MissionEventType.CREATED,
          message: 'Mission créée'
        }
      }
    },
    include: { events: true }
  });

  logger.info('Mission créée', mission.reference);

  return mission;
};

export const listMissions = async (filters?: { status?: MissionStatusValue; driverProfileId?: string; clientId?: string }) =>
  prisma.mission.findMany({
    where: {
      status: filters?.status,
      driverProfileId: filters?.driverProfileId,
      clientId: filters?.clientId
    },
    include: {
      client: { include: { user: true } },
      driverProfile: { include: { user: true } },
      events: { orderBy: { createdAt: 'desc' } },
      expenses: true
    },
    orderBy: { pickupDate: 'desc' }
  });

export const listMissionsForDriverUser = async (userId: string) => {
  const driverProfile = await prisma.driverProfile.findUnique({ where: { userId } });
  if (!driverProfile) {
    return [];
  }
  return listMissions({ driverProfileId: driverProfile.id });
};

export const updateMissionStatus = async (missionId: string, payload: unknown) => {
  const data = missionStatusSchema.parse(payload);

  const mission = await prisma.mission.update({
    where: { id: missionId },
    data: {
      status: data.status,
      notes: data.notes,
      events: {
        create: {
          type: MissionEventType.STATUS_UPDATED,
          message: `Statut mis à jour: ${data.status}`
        }
      }
    },
    include: { events: true }
  });

  return mission;
};

export const assignDriver = async (missionId: string, payload: unknown) => {
  const data = assignDriverSchema.parse(payload);

  const mission = await prisma.mission.update({
    where: { id: missionId },
    data: {
      driverProfileId: data.driverProfileId,
      status: MissionStatus.ASSIGNED,
      events: {
        create: {
          type: MissionEventType.DRIVER_ASSIGNED,
          message: 'Chauffeur assigné'
        }
      }
    },
    include: { driverProfile: { include: { user: true } }, events: true }
  });

  return mission;
};
