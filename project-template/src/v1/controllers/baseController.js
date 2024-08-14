module.exports = ({ useCase }) => async (request, reply) => {
  const payload = {
    ...request.body,
    ...request.query,
    ...request.headers
  }
  try {
    const {
      statusCode = 200,
      headers = {},
      data
    } = await useCase({ payload, headers: request.headers, reply })

    return reply
      .code(statusCode)
      .headers(headers)
      .send(data)
  } catch (err) {
    return reply.code(err.statusCode || 500).headers({
      requestId: request.headers.requestId
    }).send(err.toResponse())
  }
}
