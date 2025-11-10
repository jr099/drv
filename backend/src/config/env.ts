import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url({ message: 'DATABASE_URL doit être une URL valide' }),
  JWT_SECRET: z.string().min(32, 'JWT_SECRET doit contenir au moins 32 caractères'),
  REFRESH_TOKEN_SECRET: z.string().min(32, 'REFRESH_TOKEN_SECRET doit contenir au moins 32 caractères'),
  RESET_TOKEN_SECRET: z.string().min(32, 'RESET_TOKEN_SECRET doit contenir au moins 32 caractères'),
  SMTP_HOST: z.string(),
  SMTP_PORT: z.coerce.number(),
  SMTP_USER: z.string().email('SMTP_USER doit être une adresse email'),
  SMTP_PASSWORD: z.string(),
  APP_URL: z.string().url(),
  BACKEND_PORT: z.coerce.number().default(4000),
  STORAGE_PATH: z.string().default('./uploads')
});

type Env = z.infer<typeof envSchema>;

const env: Env = envSchema.parse(process.env);

export default env;
