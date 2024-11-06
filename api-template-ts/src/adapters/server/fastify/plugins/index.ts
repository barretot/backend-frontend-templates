import { FastifyInstance } from 'fastify'

import cors from './fastify-cors'
import healthcheck from './fastify-healthcheck'
import swagger from './fastify-swagger'


export async function registerPlugins(fastify: FastifyInstance) {
  swagger(fastify)
  fastify.register(cors)
  fastify.register(healthcheck)
}
