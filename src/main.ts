import 'reflect-metadata'
import 'dotenv/config'
import chalk from 'chalk'
import { Server } from './server'

const port = process.env.SERVER_PORT
const isProd = process.env.NODE_ENV === 'PROD'

if (isProd)
  console.log(
    chalk.red(`
    Caution: This server is running in production mode. 
    Be cautious with your actions as they will directly impact the live environment. 
    Double-check before making critical changes and ensure you have necessary backups.
  `),
  )
else
  console.log(
    chalk.yellow(`
  Heads up: This server is currently running in development mode. 
  Feel free to experiment and make changes without affecting the live environment. 
  This is your playground to innovate and perfect.
  `),
  )

Server.listen({ port: Number(port) }, (err, address) => {
  if (err) {
    Server.log.error(err)
    process.exit(1)
  }

  Server.log.info(`Fastify is listening on port: ${address}`)
})
