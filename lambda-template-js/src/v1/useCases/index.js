const helloLambda = require('./helloLambda')

module.exports = (dependencies) => ({
  helloLambda: helloLambda(dependencies)
})
