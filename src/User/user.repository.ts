import { PrismaClient } from '@prisma/client'
import { IUserRepository } from './interface/IUser.repository'
import { CreateUserDto } from './interface/User.dto'
import { User } from './user.entitiy'
import { inject, injectable } from 'inversify'

@injectable()
class UserRepository implements IUserRepository {

  constructor(@inject('PrismaClient') private readonly prisma: PrismaClient){}

  public async create(createUserDto: CreateUserDto): Promise<User> {

    if(!createUserDto.id)
      throw new Error('User should have an id')

    return await this.prisma.user.create({
      data: {
        id: createUserDto.id,
        name: createUserDto.name,
        email: createUserDto.email,
        age: createUserDto.age,
      },
    })
  }

  public async  update(createUserDto: CreateUserDto): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id: createUserDto.id,
      },
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        age: createUserDto.age,
        isActive: createUserDto.isActive,
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

  public async find(): Promise<User[]> {
    return await this.prisma.user.findMany()
  }
}

export { UserRepository }