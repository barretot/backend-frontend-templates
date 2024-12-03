import { z } from 'zod'

export const envs = {
  PORT: z.coerce.number().optional(),
  NODE_ENV: z.enum(['dev', 'test', 'prd']).default('dev'),
  ARGON2_TYPE: z.coerce.number().refine((val) => [0, 1, 2].includes(val), {
    message: 'Invalid ARGON2_TYPE. Expected 0, 1, or 2.',
  }),
  ARGON2_TIME_COST: z.coerce
    .number()
    .min(1, { message: 'Time cost must be >= 1' }),
}
