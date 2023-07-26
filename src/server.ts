import { createHandler } from 'graphql-http/lib/use/express'
import express from 'express'
import { routes } from './routes'
import { schema } from './schema'

const server = express()

server.use(express.json())

server.use(routes)

server.use('/graphql', createHandler({
  schema: schema, 
}))

export { server }