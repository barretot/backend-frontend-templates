const logger = require('./logger')

module.exports = dependencies => ({
  logger: logger(dependencies)
})
