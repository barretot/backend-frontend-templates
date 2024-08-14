const config = require('../@shared/mocks/config')
const utils = require('../../../../../common/utils')
const Errors = require('../../../../../src/v1/errors')

class DataBuilder {
  constructor () {
    this.mockDependencies = {
      payload: {
        name: 'Unknown'
      },
      headers: {
        'content-type': 'aplication/json'
      },
      config,
      utils,
      Errors
    }
  }

  success () {
    return this
  }

  catchError () {
    this.mockDependencies.payload = {
      error: 'Simulated error'
    }
    return this
  }

  build () {
    return this.mockDependencies
  }
}

module.exports = DataBuilder
