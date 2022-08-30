/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { env } from '@/config/env';

export const logError =
  env.NODE_ENV === 'production' || env.NODE_ENV === 'test'
    ? () => {}
    : (...args: any) => console.error(...args);
