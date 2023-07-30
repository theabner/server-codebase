import { User } from '../user.entitiy'
import { UserDto } from './User.dto'

interface IUserRepository {
  create(UserDto: UserDto): Promise<User>;
  update(UserDto: UserDto): Promise<User>;
  delete(user: string): Promise<User>;
  findById(id: string): Promise<User>;
  find(take?: number, cursor?: string): Promise<User[]>;
}

export { IUserRepository }