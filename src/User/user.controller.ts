import { inject, injectable } from 'inversify'
import { User } from './user.entitiy'
import { IUserService } from './interface/IUser.service'
import { CreateUserDto } from './interface/User.dto'

@injectable()
class UserController {

  constructor(@inject('UserService') private readonly userService: IUserService) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto)
  }

  public async update(createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.update(createUserDto)
  }

  public async delete(userId: string): Promise<User> {
    return await this.userService.delete(userId)
  }

  public async findById(userId: string): Promise<User> {
    return await this.userService.findById(userId)
  }

  public async find(take?: number, lastUser?: string): Promise<User[]> {
    return await this.userService.find(take, lastUser)
  }
}

export { UserController } 