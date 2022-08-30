import 'reflect-metadata';
import 'express-async-errors';
import '@/containers';
import express from 'express';
import { middlewares } from './middlewares';

const app = express();

app.use(middlewares);

export { app };
