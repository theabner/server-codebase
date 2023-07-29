import { Router } from 'express'
import { DateTime } from 'luxon'

const AppRoutes = Router()

AppRoutes.get('/health', (req, res) => {
  // let controller = AppRoutes.get<UserController>(UserController);
  res.status(200).json({
    uptime: process.uptime(),
    timestamp: DateTime.now().toISO(),
  })
})

export { AppRoutes }