import 'reflect-metadata'
import { server } from './server'
import 'dotenv/config'

const port = process.env.SERVER_PORT

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
