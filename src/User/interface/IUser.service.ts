import { User } from '../user.entitiy'
import { CreateUserDto } from './User.dto'

interface IUserService {
  create(createUserDto: CreateUserDto): Promise<User>;
  update(createUserDto: CreateUserDto): Promise<User>;
  delete(user: string): Promise<User>;
  findById(id: string): Promise<User>;
  find(): Promise<User[]>;
}

export { IUserService }