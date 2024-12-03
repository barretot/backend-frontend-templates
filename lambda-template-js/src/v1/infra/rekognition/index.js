const {
  RekognitionClient,
  DescribeProjectVersionsCommand,
  StartProjectVersionCommand,
  StopProjectVersionCommand,
  DetectCustomLabelsCommand
} = require('@aws-sdk/client-rekognition')

const config = require('../../../../config')

const client = new RekognitionClient({
  region: config.app.region
})

const describeProjectVersions = async (params) => {
  try {
    const command = new DescribeProjectVersionsCommand(params)
    const response = await client.send(command)

    return response
  } catch (err) {
    throw new Error(err)
  }
}

const startProjectVersion = async (params) => {
  const command = new StartProjectVersionCommand(params)
  const response = await client.send(command)

  return response
}

const stopProjectVersion = async (params) => {
  const command = new StopProjectVersionCommand(params)
  const response = await client.send(command)

  return response
}

const describeProjectVersion = async (params) => {
  const command = new DescribeProjectVersionsCommand(params)
  const response = await client.send(command)

  return response
}

const detectCustomLabels = async (params) => {
  const command = new DetectCustomLabelsCommand(params)
  const response = await client.send(command)

  return response
}

module.exports = {
  describeProjectVersions,
  startProjectVersion,
  stopProjectVersion,
  describeProjectVersion,
  detectCustomLabels
}
