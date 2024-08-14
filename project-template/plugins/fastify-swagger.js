const fastifySwagger = require('@fastify/swagger')

module.exports = (fastify, config) => {
  fastify.register(fastifySwagger, {
    routePrefix: `${config.app.routePrefix}/docs`,
    exposeRoute: true,
    swagger: {
      info: {
        title: config.app.name,
        description: config.app.description,
        version: '1.0.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      consumes: ['application/json'],
      produces: ['application/json']
    }
  })

  fastify.ready(() => {
    fastify.swagger()
  })
}
