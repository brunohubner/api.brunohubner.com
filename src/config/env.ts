import 'dotenv/config';

export const env = {
  PORT: process.env.PORT || 3333,
  BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:3333',
  FRONTEND_URL: process.env.FRONTEND_URL || '*',
  SENDGRID_EMAIL_TO: process.env.SENDGRID_EMAIL_TO || '',
  SENDGRID_EMAIL_FROM: process.env.SENDGRID_EMAIL_FROM || '',
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || '',
  MAIL_PROVIDER: process.env.MAIL_PROVIDER || 'ethereal',
  NODE_ENV: process.env.NODE_ENV || 'development',
  CORS_CLOSED: process.env.CORS_CLOSED ? true : false,
  API_KEY: process.env.API_KEY || ''
};
