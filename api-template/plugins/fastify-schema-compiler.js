const ajvKeywords = require('ajv-keywords')
const AJV = require('ajv')

const schema = new AJV({
  removeAdditional: true,
  coerceTypes: false,
  allErrors: true
})

ajvKeywords(schema, ['transform'])

require('ajv-errors')(schema)

module.exports = fastify => {
  fastify.setValidatorCompiler(req => {
    if (!req.httpPart) {
      throw new Error('Missing httpPart')
    }
    return schema.compile(req.schema)
  })
}
