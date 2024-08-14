const fastify = require('fastify')
const { registerPlugins } = require('../plugins')
const routes = require('./routes')
const config = require('../config')

const server = fastify({})
module.exports.start = async () => {
  registerPlugins(server, config)
  server.register(routes, { prefix: config.app.routePrefix })
  await server.listen({ port: config.app.port, host: '::' })
  return server
}
