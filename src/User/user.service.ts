import { User } from './user.entitiy'
import { IUserRepository } from './interface/IUser.repository'
import { IUserService } from './interface/IUser.service'
import { UserDto } from './interface/User.dto'
import { v4 as uuidv4 } from 'uuid'
import { inject, injectable } from 'inversify'

@injectable()
class UserService implements IUserService {
  constructor(@inject('UserRepository') private readonly userRepository: IUserRepository) {}

  public async create(UserDto: UserDto): Promise<User> {
    UserDto.id = uuidv4()
    return await this.userRepository.create(UserDto)
  }

  public async update(UserDto: UserDto): Promise<User> {
    return await this.userRepository.update(UserDto)
  }

  public async delete(userId: string): Promise<User> {
    return await this.userRepository.delete(userId)
  }
  public async findById(userId: string): Promise<User> {
    return await this.userRepository.findById(userId)
  }

  public async find(take?: number, lastUser?: string): Promise<User[]> {
    return await this.userRepository.find(take, lastUser)
  }
}

export { UserService }