import { Container } from 'inversify'
import { UserModule } from './User/user.container'
import { PrismaClient } from '@prisma/client'

const aplicationModule = new Container()

aplicationModule.bind<PrismaClient>('PrismaClient').toConstantValue(new PrismaClient())
aplicationModule.load(UserModule)

export { aplicationModule }
