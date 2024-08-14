const { StatusCode } = require('../../../../constants')

class ApplicationError extends Error {
  constructor ({ additionalData, message, statusCode, flow }) {
    super(message)
    this.message = message
    this.name = this.constructor.name
    this.statusCode = statusCode
    this.flow = flow
    this.additionalData = additionalData
  }

  toResponse () {
    return {
      statusCode: this.statusCode,
      flow: this.flow,
      message: this.message,
      ...this.additionalData && { additionalData: this.additionalData }
    }
  }
}

class InternalServerError extends ApplicationError {
  constructor ({ message }) {
    super({ message }) // Passa o argumento para a classe base
    this.message = message || 'Internal Server Error'
    this.name = this.constructor.name
    this.statusCode = StatusCode.internalServerError
    this.flow = 'UNEXPECTED_ERROR'
  }
}

class RequestError extends ApplicationError {
  constructor ({ message, statusCode, url, responseTime }) {
    super({ message })
    this.message = message
    this.name = this.constructor.name
    this.statusCode = statusCode || StatusCode.UnprocessableEntity
    this.flow = 'REQUEST_ERROR'
    this.url = url
    this.responseTime = responseTime
  }
}

class BadRequestError extends ApplicationError {
  constructor ({ message, statusCode }) {
    super({ message })
    this.message = message
    this.name = this.constructor.name
    this.statusCode = statusCode || StatusCode.BadRequest
    this.flow = 'BAD_REQUEST_ERROR'
  }
}

module.exports = {
  ApplicationError,
  InternalServerError,
  RequestError,
  BadRequestError
}
