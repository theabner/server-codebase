import 'reflect-metadata'
import 'dotenv/config'
import { Server } from './server'

const port = process.env.SERVER_PORT

Server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
