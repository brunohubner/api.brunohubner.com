import express, { Router } from 'express';
import cors from 'cors';
import { routes } from '../routes';
import { catchErrors } from './catchErrors';
import { rateLimiter } from './rateLimiter';
import { env } from '../config/env';
import { checkApiKey } from './checkApiKey';

const origin = env.CORS_CLOSED ? [env.FRONTEND_URL] : '*';

const middlewares = Router();

middlewares.use(cors({ origin }));
middlewares.use(express.json());
middlewares.use(express.urlencoded({ extended: true }));
middlewares.use(checkApiKey);
middlewares.use(rateLimiter);
middlewares.use(routes);
middlewares.use(catchErrors);

export { middlewares };
