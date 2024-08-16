const baseController = require('./baseController')

module.exports = ({ useCases }) => ({
  helloLambda: baseController({
    handler: useCases.helloLambda.execute
  })
})
