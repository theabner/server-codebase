import { Container } from 'inversify'
import { UserContainer } from './User/user.container'
import { PrismaClient } from '@prisma/client'

const AppContainer = new Container()

AppContainer.bind<PrismaClient>('PrismaClient').toConstantValue(new PrismaClient())
AppContainer.load(UserContainer)

export { AppContainer }
