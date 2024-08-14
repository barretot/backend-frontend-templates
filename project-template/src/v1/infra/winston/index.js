const winston = require('winston')

module.exports = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      const msg = typeof message === 'object' ? JSON.stringify(message, null, 2) : message
      return `${timestamp} [${level.toUpperCase()}]: ${msg}`
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/project_versions.log', level: 'info' }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' })
  ]
})
