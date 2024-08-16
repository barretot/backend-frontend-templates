module.exports = ({
  config,
  logger
}) => {
  const execute = async ({ payload }) => {
    try {
      logger.info('Starting hello lambda function')

      if (payload.body) {
        return {
          message: 'Hello Lambda',
          data: payload,
          ok: true
        }
      }

      return {
        message: 'Hello Lambda',
        ok: true
      }
    } catch (err) {
      return 'Error on hello lambda'
    }
  }

  return {
    execute
  }
}
