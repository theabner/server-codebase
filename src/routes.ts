import 'dotenv/config'
import { DateTime } from 'luxon'
import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from 'fastify'

const AppRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/health', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.status(200).send({
      uptime: process.uptime(),
      timestamp: DateTime.now().toISO(),
    })
  })
}

export { AppRoutes }