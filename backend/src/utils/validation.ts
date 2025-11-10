import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(64),
  firstName: z.string().min(2).max(100),
  lastName: z.string().min(2).max(100),
  phone: z.string().optional(),
  company: z.string().optional()
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

export const quoteSchema = z.object({
  fullName: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  vehicleType: z.string().min(2),
  pickupAddress: z.string().min(2),
  dropoffAddress: z.string().min(2),
  desiredDate: z.coerce.date(),
  additionalNotes: z.string().optional()
});

export const missionCreationSchema = z.object({
  clientId: z.string().optional(),
  driverProfileId: z.string().optional(),
  managerId: z.string().optional(),
  vehicleType: z.string().min(2),
  vehiclePlate: z.string().optional(),
  pickupAddress: z.string().min(2),
  dropoffAddress: z.string().min(2),
  pickupDate: z.coerce.date(),
  deliveryDate: z.coerce.date().optional(),
  distanceKm: z.coerce.number().optional(),
  estimatedPrice: z.coerce.number().optional(),
  actualPrice: z.coerce.number().optional(),
  notes: z.string().optional()
});

export const missionStatusSchema = z.object({
  status: z.enum(['PENDING', 'ASSIGNED', 'IN_PROGRESS', 'COMPLETED', 'CANCELED']),
  notes: z.string().optional()
});

export const passwordResetRequestSchema = z.object({
  email: z.string().email()
});

export const passwordResetSchema = z.object({
  token: z.string().min(10),
  password: z.string().min(8).max(64)
});

export const assignDriverSchema = z.object({
  driverProfileId: z.string()
});
