const env = require('dotenv').config()
const { expandEnv } = require('dotenv-addon')
const { name } = require('../package.json')
const appName = process.env.SERVICE ?? name
const routePrefix = `/api/${appName.replace(/-/g, '')}`

module.exports = expandEnv({
  dotEnvObject: env.parsed,
  config: {
    app: {
      name: appName,
      port: process.env.PORT || 3001,
      routePrefix,
      env: process.env.NODE_ENV
    },
    plugins: {
      swagger: {
        basePath: routePrefix,
        route: 'docs'
      }
    }
  }
})
