import fastify from 'fastify'

import { userRoutes } from '../routes/user-routes.js'
import { registerPlugins } from './fastify/plugins/index.js'

export const app = fastify({ logger: true })

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
