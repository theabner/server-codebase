import { Container } from 'inversify'
import { UserModule } from './User/user.container'
import { PrismaClient } from '@prisma/client'

const AppModule = new Container()

AppModule.bind<PrismaClient>('PrismaClient').toConstantValue(new PrismaClient())
AppModule.load(UserModule)

export { AppModule }