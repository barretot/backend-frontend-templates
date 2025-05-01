import { z } from 'zod';

export const envs = {
  PORT: z.coerce.number().optional(),
  NODE_ENV: z.enum(['dev', 'test', 'prd']).default('dev'),
  BCRYPT_SALT_ROUNDS: z.string(),
};
