import 'dotenv/config'

import { Config } from '@/infra/env/get-env'

import { app } from './app'

const env = new Config()

const PORT = env.get('PORT')

const init = async () => {
  try {
    await app.listen({
      host: '0.0.0.0',
      port: PORT || 3333,
    })

    console.log({ message: `🚀 Server listening on ${PORT}` })
  } catch (error) {
    console.log({ message: `App failed to start: ${error}` })
    process.exit(1)
  }
}

init()
