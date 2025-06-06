import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import { ENVConfig } from './app/config/configuration'
import { errorLogger, logger } from './app/helpers/logger'

let server: Server

async function main() {
  try {
    await mongoose.connect(ENVConfig.database_url as string)

    logger.info('Connected to database')

    server = app.listen(ENVConfig.port, () => {
      console.info(`app is listening on port ${ENVConfig.port}`)
      logger.info(`app is listening on port ${ENVConfig.port}`)
    })
  } catch (err) {
    console.error(err)
    errorLogger.error(err)
  }
}

main()

process.on('unhandledRejection', (err) => {
  console.info(`😈 Unhandled Rejection is detected , shutting down ... \n`, err)
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on('uncaughtException', (err) => {
  console.info(`😈 Uncaught Exception is detected , shutting down ... \n`, err)
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})
