import prisma from '../config/prisma.js';
import { quoteSchema } from '../utils/validation.js';
import { logger } from '../utils/logger.js';

export const createQuoteRequest = async (payload: unknown, requesterId?: string) => {
  const data = quoteSchema.parse(payload);

  const quote = await prisma.quoteRequest.create({
    data: {
      fullName: data.fullName,
      company: data.company,
      email: data.email,
      phone: data.phone,
      vehicleType: data.vehicleType,
      pickupAddress: data.pickupAddress,
      dropoffAddress: data.dropoffAddress,
      desiredDate: data.desiredDate,
      additionalNotes: data.additionalNotes,
      requesterId
    }
  });

  logger.info('Demande de devis créée', quote.id);

  return quote;
};

export const listQuotes = async () =>
  prisma.quoteRequest.findMany({
    orderBy: { createdAt: 'desc' }
  });

export const updateQuoteStatus = async (quoteId: string, status: 'NEW' | 'IN_REVIEW' | 'ACCEPTED' | 'REJECTED') =>
  prisma.quoteRequest.update({
    where: { id: quoteId },
    data: { status }
  });
