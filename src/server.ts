import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import { createHandler } from 'graphql-http/lib/use/express'
import { routes } from './routes'
import { schema } from './schema'


const server = express()

server.use(cors({
  origin: `http://localhost:${process.env.SERVER_PORT}`,
}))

server.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true,
  legacyHeaders: false,
}))

server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())

server.use(routes)

server.use('/graphql', createHandler({
  schema: schema, 
}))

export { server }