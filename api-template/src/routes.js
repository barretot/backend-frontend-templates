const controllers = require('./v1/controllers')
const schemas = require('./v1/schemas')
const v1Routes = require('./v1/routes')

const registerRoutes = (fastify, routes) => {
  routes
    .map(({ handler, ...rest }) => ({
      ...rest,
      handler
    }))
    .forEach(route => fastify.route(route))
}

module.exports = async fastify => {
  registerRoutes(
    fastify,
    [
      ...v1Routes({ fastify, controllers, schemas })
    ]
  )
}
