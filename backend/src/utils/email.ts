import nodemailer from 'nodemailer';
import env from '../config/env.js';
import { logger } from './logger.js';

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: env.SMTP_PORT === 465,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASSWORD
  }
});

export const sendMail = async (options: { to: string; subject: string; html: string }) => {
  try {
    await transporter.sendMail({
      from: `jrdriving <${env.SMTP_USER}>`,
      ...options
    });
    logger.info(`Email envoyé à ${options.to}`);
  } catch (error) {
    logger.error('Erreur envoi email', error);
    throw new Error("Impossible d'envoyer l'email");
  }
};
