const {
  logger
} = require('../adapters')

const factory = require('./factory')

const config = require('../../../config')

const useCases = require('../useCases')({
  config,
  logger
})

module.exports = factory({ useCases })
