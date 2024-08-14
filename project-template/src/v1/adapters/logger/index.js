const logger = ({
  winston
}) => {
  const onSuccess = (successData) => {
    winston.info(successData)

    return successData
  }

  const onError = (errorData) => {
    winston.error(errorData)
    return errorData
  }

  const loggerInfo = (infoData) => winston.info(infoData)

  return {
    loggerInfo,
    onSuccess,
    onError
  }
}

module.exports = logger
