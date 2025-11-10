import prisma from '../config/prisma.js';
import { logger } from '../utils/logger.js';

type IntegrationPayload = {
  source: string;
  event: string;
  payload?: unknown;
};

export const logIntegration = async ({ source, event, payload }: IntegrationPayload, status = 'SUCCESS') => {
  await prisma.integrationLog.create({
    data: {
      source,
      event,
      payload: payload as object,
      status
    }
  });
};

export const syncWithExternalSystem = async (missionId: string) => {
  try {
    await logIntegration({ source: 'n8n', event: 'MISSION_SYNC', payload: { missionId } });
  } catch (error) {
    logger.error('Erreur synchronisation externe', error);
    await logIntegration({ source: 'n8n', event: 'MISSION_SYNC', payload: { missionId } }, 'FAILED');
  }
};
