import { z } from 'zod'
import zodToJsonSchema from 'zod-to-json-schema'

export const registerSchema = {
  body: zodToJsonSchema(
    z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6),
    }),
  ),
  response: {
    201: {
      description: 'User created',
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            email: { type: 'string' },
          },
        },
      },
    },
  },
}
