import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import { createHandler } from 'graphql-http/lib/use/express'
import { AppRoutes } from './routes'
import { GraphqlSchema } from './schema'

const Server = express()

Server.use(cors({
  origin: `http://localhost:${process.env.SERVER_PORT}`,
}))

Server.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true,
  legacyHeaders: false,
}))

Server.use(helmet())
Server.use(morgan('dev'))
Server.use(express.json())

Server.use(AppRoutes)

Server.use('/graphql', createHandler({
  schema: GraphqlSchema, 
}))

export { Server }