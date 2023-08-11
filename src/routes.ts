import 'dotenv/config'
import { Router } from 'express'
import { DateTime } from 'luxon'
import expressPlayground from 'graphql-playground-middleware-express'

const AppRoutes = Router()

if(process.env.NODE_ENV === 'DEV') 
  AppRoutes.get('/playground', expressPlayground({ endpoint: '/graphql' }))

AppRoutes.get('/health', (req, res) => {
  // let controller = AppRoutes.get<UserController>(UserController);
  res.status(200).json({
    uptime: process.uptime(),
    timestamp: DateTime.now().toISO(),
  })
})

export { AppRoutes }