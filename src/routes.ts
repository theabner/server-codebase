import { Router } from 'express'
import { DateTime } from 'luxon'

const routes = Router()

routes.get('/health', (req, res) => {
  // let controller = container.get<UserController>(UserController);
  res.status(200).json({
    uptime: process.uptime(),
    timestamp: DateTime.now().toISO(),
  })
})

export { routes }