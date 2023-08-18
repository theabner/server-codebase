import 'dotenv/config'
import { Container } from 'inversify'
import { UserModule } from './User/user.container'
import { PrismaClient } from '@prisma/client'

const AppModule = new Container()
const isProd = process.env.NODE_ENV === 'PROD'

if (isProd) {
  AppModule.bind<PrismaClient>('PrismaClient').toConstantValue(
    new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_PROD_URL,
        },
      },
    }),
  )
} else {
  AppModule.bind<PrismaClient>('PrismaClient').toConstantValue(
    new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_DEV_URL,
        },
      },
    }),
  )
}

AppModule.load(UserModule)

export { AppModule }
