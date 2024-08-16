const serverWrapper = require('./server')

const init = async () => {
  try {
    const { server } = await serverWrapper.start()

    console.log({ message: `Server listening on ${server.address().port}` })
  } catch (error) {
    console.log({ message: `App failed to start: ${error.message}` })
    process.exit(1)
  }
}

init()
