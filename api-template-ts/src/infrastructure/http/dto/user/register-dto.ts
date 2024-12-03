import { z } from 'zod'

export const registerDto = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})
