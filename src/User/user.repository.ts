import { PrismaClient } from '@prisma/client'
import { IUserRepository } from './interface/IUser.repository'
import { UserDto } from './interface/User.dto'
import { User } from './user.entitiy'
import { inject, injectable } from 'inversify'

@injectable()
class UserRepository implements IUserRepository {

  constructor(@inject('PrismaClient') private readonly prisma: PrismaClient){}

  public async create(UserDto: UserDto): Promise<User> {

    if(!UserDto.id)
      throw new Error('User should have an id')

    return await this.prisma.user.create({
      data: {
        id: UserDto.id,
        name: UserDto.name,
        email: UserDto.email,
        age: UserDto.age,
      },
    })
  }

  public async  update(UserDto: UserDto): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id: UserDto.id,
      },
      data: {
        name: UserDto.name,
        email: UserDto.email,
        age: UserDto.age,
        isActive: UserDto.isActive,
      },
    })
  }
  
  public async  delete(userID: string): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id: userID,
      },
      data: {
        isActive: false,
      },
    })
  }

  public async findById(userID: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userID,
      },
    })

    if(!user) 
      throw new Error('User not found')
      
    return user
  }

  public async find(take?: number, cursor? : string): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      cursor: cursor ? { id: cursor } : undefined,
      take: take ? take : 10,
    })
    
    return users
  }
}

export { UserRepository }