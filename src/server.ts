import 'dotenv/config'
import Fastify from 'fastify'
import mercurius from 'mercurius'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'
import { AppRoutes } from './routes'
import { GraphqlSchema } from './schema'
import { fastifyCors } from '@fastify/cors'
import { NoSchemaIntrospectionCustomRule } from 'graphql'

const isProd = process.env.NODE_ENV === 'PROD'
const port = process.env.SERVER_PORT

const Server = Fastify({
  logger: true,
  requestTimeout: 30000,
})

Server.register(AppRoutes)

Server.register(mercurius, {
  schema: GraphqlSchema,
  validationRules: isProd ? [NoSchemaIntrospectionCustomRule] : [],
  graphiql: isProd ? false : true,
})

if (isProd) {
  Server.register(helmet, { global: true })

  Server.register(fastifyCors, {
    origin: (origin, callback) => {
      const allowedOrigins = [`http://localhost:${port}`, 'https:/my-domain.com']

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Origin not allowed'), false)
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })

  Server.register(rateLimit, {
    max: 1000,
    timeWindow: 15 * 60 * 1000,
    errorResponseBuilder: () => {
      return {
        statusCode: 429,
        error: 'Too Many Requests',
        message: 'Rate limit exceeded',
      }
    },
  })
}

export { Server }
