import fastify from 'fastify'

import { userRoutes } from '../routes/user-routes'
import { registerPlugins } from './fastify/plugins/index'

export const app = fastify()

registerPlugins(app)

app.register(userRoutes, {
  prefix: '/api',
})

app.setErrorHandler((error, _, reply) => {
  if (error instanceof Error) {
    return reply.send(error)
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
