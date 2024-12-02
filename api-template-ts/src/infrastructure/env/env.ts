import { z } from 'zod'

export const envs = {
  NODE_ENV: z.enum(['dev', 'test', 'prd']).default('dev'),
  PORT: z.coerce.number(),
  ARGON2_TYPE: z.union([z.literal(0), z.literal(1), z.literal(2)]).default(2),
  ARGON2_TIME_COST: z.number(),
}
