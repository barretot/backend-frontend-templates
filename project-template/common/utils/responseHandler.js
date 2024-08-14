const { ERROR: { INTERNAL_SERVER_ERROR } } = require('../../constants')
const { ApplicationError, InternalServerError } = require('../../src/v1/errors/@shared')

const isApplicationError = (err) => err instanceof ApplicationError

const errorHandler = (err, reply) => {
  if (isApplicationError(err) && reply) {
    return reply
      .code(err.statusCode)
      .send(err.toResponse())
  }

  throw isApplicationError(err) ? err : new InternalServerError({ message: INTERNAL_SERVER_ERROR })
}

module.exports = { errorHandler }
