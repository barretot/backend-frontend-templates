const hello = require('./hello')

module.exports = dependencies => ({
  hello: hello(dependencies)
})
