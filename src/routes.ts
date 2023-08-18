import 'dotenv/config'
import { DateTime } from 'luxon'
import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from 'fastify'

const routes = [
  {
    url: '/health',
    method: 'GET',
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      reply.status(200).send({
        uptime: process.uptime(),
        timestamp: DateTime.now().toISO(),
      })
    },
  },
]

const AppRoutes = async (fastify: FastifyInstance) => {
  routes.forEach((route) => {
    switch (route.method) {
      case 'GET':
        fastify.get(route.url, route.handler)
        break
      case 'POST':
        fastify.post(route.url, route.handler)
        break
      case 'PUT':
        fastify.put(route.url, route.handler)
        break
      case 'DELETE':
        fastify.delete(route.url, route.handler)
        break
      case 'PATH':
        fastify.patch(route.url, route.handler)
        break
      default:
        break
    }
  })
}

export { AppRoutes }
