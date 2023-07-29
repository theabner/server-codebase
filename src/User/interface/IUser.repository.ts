import { User } from '../user.entitiy'
import { CreateUserDto } from './User.dto'

interface IUserRepository {
  create(createUserDto: CreateUserDto): Promise<User>;
  update(createUserDto: CreateUserDto): Promise<User>;
  delete(user: string): Promise<User>;
  findById(id: string): Promise<User>;
  find(take?: number, cursor?: string): Promise<User[]>;
}

export { IUserRepository }