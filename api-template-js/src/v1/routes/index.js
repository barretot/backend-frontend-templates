module.exports = ({ controllers, schemas, middleware }) => ([
  {
    method: 'POST',
    url: '/v1/hello',
    schema: {
      tags: ['Register routes'],
      summary: 'This Method will list the contacts of the user',
      description: 'List contacts',
      ...schemas.hello
    },
    handler: controllers.hello.execute
  }
])
