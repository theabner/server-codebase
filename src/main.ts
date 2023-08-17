import 'reflect-metadata'
import 'dotenv/config'
import { Server } from './server'

const port = process.env.SERVER_PORT

Server.listen({ port: Number(port) }, (err, address) => {
  if (err) {
    Server.log.error(err)
    process.exit(1)
  }

  Server.log.info(`Fastify is listening on port: ${address}`)
})
