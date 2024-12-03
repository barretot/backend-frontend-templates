const logger = ({
  winston
}) => {
  const info = (infoData) => winston.info(infoData)

  return {
    info
  }
}

module.exports = logger
