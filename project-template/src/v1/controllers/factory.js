const makeBaseController = require('./baseController')

module.exports = ({ useCases, config }) => ({
  hello: {
    execute: makeBaseController({
      useCase: useCases.hello.execute,
      config
    })
  }
})
