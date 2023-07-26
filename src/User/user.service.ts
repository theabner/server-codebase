import { User } from './user.entitiy'
import { IUserRepository } from './interface/IUser.repository'
import { IUserService } from './interface/IUser.service'
import { CreateUserDto } from './interface/User.dto'
import { v4 as uuidv4 } from 'uuid'
import { inject, injectable } from 'inversify'

@injectable()
class UserService implements IUserService {
  constructor(@inject('UserRepository') private readonly userRepository: IUserRepository) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.id = uuidv4()
    return await this.userRepository.create(createUserDto)
  }

  public async  update(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.update(createUserDto)
  }

  public async  delete(userId: string): Promise<User> {
    return await this.userRepository.delete(userId)
  }
  public async  findById(userId: string): Promise<User> {
    return await this.userRepository.findById(userId)
  }

  public async find(): Promise<User[]> {
    return await this.userRepository.find()
  }
}

export { UserService }