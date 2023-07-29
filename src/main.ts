import 'reflect-metadata'
import { Server } from './server'
import 'dotenv/config'

const port = process.env.SERVER_PORT

Server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
