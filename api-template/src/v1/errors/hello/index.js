const { ApplicationError } = require('../@shared')
const { StatusCode } = require('../../../../constants')

class PayloadError extends ApplicationError {
  constructor () {
    super({ message: 'Payload contain error property', statusCode: StatusCode.InternalServerError, flow: 'PAYLOAD_ERROR' })
  }
}

module.exports = {
  PayloadError
}
