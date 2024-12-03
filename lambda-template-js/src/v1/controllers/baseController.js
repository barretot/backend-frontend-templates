module.exports = ({
  handler
}) =>
  async (request) => {
    const payload = {
      ...request,
      ...request.payload
    }

    const data = await handler({
      payload: JSON.parse(payload.body)
    })

    return {
      data,
      statusCode: 200
    }
  }
