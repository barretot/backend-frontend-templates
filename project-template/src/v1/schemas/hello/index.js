const hello = {
  body: {
    type: 'object',
    properties: {
      name: {
        type: 'string'
      },
    },

    errorMessage: 'Bad Request'
  },
  headers: {
    type: 'object',
    properties: {
      'x-header-test': { type: 'string' }
    }
  }
}

module.exports = {
  hello
}
