const {
  name,
  description,
  version
} = require('../package.json')

module.exports = {
  app: {
    name,
    description,
    version,
    region: process.env.REGION,
    stage: process.env.STAGE
  },
}
