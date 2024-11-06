import { registerBodyJsonSchema } from '../../validations/user-validations/register'

export const registerSchema = {
  body: registerBodyJsonSchema,
  response: {
    201: {
      description: 'User created',
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' },
      },
    },
  },
}
