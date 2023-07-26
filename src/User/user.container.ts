import { ContainerModule } from 'inversify'
import { IUserService } from './interface/IUser.service'
import { UserService } from './user.service'
import { IUserRepository } from './interface/IUser.repository'
import { UserRepository } from './user.repository'
import { UserController } from './user.controller'

const UserModule = new ContainerModule((bind) => {
  bind<IUserRepository>('UserRepository').to(UserRepository)
  bind<IUserService>('UserService').to(UserService)
  bind<UserController>(UserController).toSelf()
})

export { UserModule }