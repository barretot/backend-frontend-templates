const {
  logger
} = require('../adapters')

const config = require('../../../config')
const factory = require('./factory')
const useCasesWrapper = require('../useCases')
const utils = require('../../../common/utils')
const Errors = require('../errors')

const useCases = useCasesWrapper({
  Errors,
  utils,
  config,
  logger
})

module.exports = factory({
  useCases,
  config
})
