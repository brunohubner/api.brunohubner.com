/* eslint-disable @typescript-eslint/no-unused-vars */
import { env } from '@/config/env';
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';

export function checkApiKey(
  req: Request,
  _res: Response,
  next: NextFunction
): Response | void {
  const { apikey } = req.headers;

  if (apikey !== env.API_KEY) {
    throw new AppError('Invalid API Key.', 401);
  }

  next();
}
