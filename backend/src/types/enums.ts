export const UserRole = {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  DRIVER: 'DRIVER',
  CLIENT: 'CLIENT'
} as const;

export type UserRoleValue = (typeof UserRole)[keyof typeof UserRole];

export const MissionStatus = {
  PENDING: 'PENDING',
  ASSIGNED: 'ASSIGNED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
} as const;

export type MissionStatusValue = (typeof MissionStatus)[keyof typeof MissionStatus];

export const MissionEventType = {
  CREATED: 'CREATED',
  DRIVER_ASSIGNED: 'DRIVER_ASSIGNED',
  PICKUP_COMPLETED: 'PICKUP_COMPLETED',
  DELIVERY_COMPLETED: 'DELIVERY_COMPLETED',
  STATUS_UPDATED: 'STATUS_UPDATED',
  DOCUMENT_GENERATED: 'DOCUMENT_GENERATED',
  EXPENSE_REPORTED: 'EXPENSE_REPORTED'
} as const;

export type MissionEventTypeValue = (typeof MissionEventType)[keyof typeof MissionEventType];
