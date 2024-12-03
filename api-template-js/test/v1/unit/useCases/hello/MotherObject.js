const DataBuilder = require('./DataBuilder')

const motherObject = {
  success: new DataBuilder().success().build(),
  catchError: new DataBuilder().catchError().build()
}

module.exports = motherObject
