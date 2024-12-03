module.exports = ({
  utils: {
    responseHandler: {
      errorHandler
    }
  },
  Errors: {
    HelloErrors: {
      PayloadError
    }
  },
  config
}) => {
  const execute = async ({
    payload,
    headers,
    reply
  }) => {
    try {
      if (payload.error) {
        throw new PayloadError('Simulated error')
      }

      return {
        data: {
          response: `Hello ${payload.name}`,
          contentType: headers['content-type'],
          ok: true
        }

      }
    } catch (err) {
      return errorHandler(err, reply)
    }
  }

  return {
    execute
  }
}
