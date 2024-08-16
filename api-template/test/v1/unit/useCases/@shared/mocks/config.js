module.exports = Object.freeze({
  app: {
    name: 'api-name',
    port: process.env.PORT,
    routePrefix: 'api-name',
    env: process.env.NODE_ENV
  },
  plugins: {
    swagger: {
      basePath: 'api-name',
      route: 'docs'
    }
  }
})
