import { PrismaClient } from '@prisma/client'
import { IUserRepository } from '../../src/User/interface/IUser.repository'
import { UserRepository } from '../../src/User/user.repository'
import { USER_MOCK } from './mock/user.mock'
import { CreateUserDto } from '../../src/User/interface/User.dto'

let repository: IUserRepository
const prisma: PrismaClient = new PrismaClient()

beforeEach(() => {
  prisma.user.create = jest.fn().mockResolvedValue(USER_MOCK[0])
  prisma.user.update = jest.fn().mockResolvedValue(USER_MOCK[1])
  prisma.user.findMany = jest.fn().mockResolvedValue(USER_MOCK)
  prisma.user.findUnique = jest.fn().mockResolvedValue(USER_MOCK[3])

  repository = new UserRepository(prisma)
})

describe('UserRepository', () => {
  it('should create a user', async () => {
    const user = await repository.create({
      id: 'dsadasddsad',
      name: 'name1',
      email: 'email1',
      age: 1,
      isActive: true,
    })

    expect(user).toEqual(USER_MOCK[0])
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('age')
    expect(user).toHaveProperty('isActive')

    expect(user.isActive).toBeTruthy()
    expect(prisma.user.create).toBeCalledTimes(1)
  })

  it('should return an error if user.id is invalid', async () => {
    const createUserDto: CreateUserDto = {
      name: 'name1',
      email: 'email1',
      age: 1,
      isActive: true,
    }

    repository.create(createUserDto).catch(error => {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('User should have an id')
    })
  })

  it('should update a user', async () => {
    const user = await repository.update({
      id: '1',
      name: 'name1',
      email: 'email1',
      age: 1,
      isActive: true,
    })

    expect(user).toEqual(USER_MOCK[1])
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('age')
    expect(user).toHaveProperty('isActive')

    expect(prisma.user.update).toBeCalledTimes(1)
  })

  it('should delete a user', async () => {
    const user = await repository.delete('1')

    expect(user).toEqual(USER_MOCK[1])
    expect(user.isActive).toBe(false)
    expect(prisma.user.update).toBeCalledTimes(1)
  })

  it('should find a user', async () => {
    const user = await repository.findById('1')

    expect(user).toEqual(USER_MOCK[3])
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('age')
    expect(user).toHaveProperty('isActive')

    expect(prisma.user.findUnique).toBeCalledTimes(1)
  })

  it('should return an error if user not found', async () => {
    jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(null)

    await repository.findById('1').catch(error => {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('User not found')
    })
  })

  it('should find all users', async () => {
    const users = await repository.find()

    expect(users).toEqual(USER_MOCK)
    expect(prisma.user.findMany).toBeCalledTimes(1)
    expect(users).toHaveLength(5)
  })

  it('should find  3 users', async () => {
    jest.spyOn(prisma.user, 'findMany').mockResolvedValue([
      {
        id: '1',
        name: 'name1',
        email: 'email1',
        age: 1,
        isActive: true,
      },
      {
        id: '2',
        name: 'name2',
        email: 'email2',
        age: 2,
        isActive: false,
      },
      {
        id: '3',
        name: 'name3',
        email: 'email3',
        age: 3,
        isActive: false,
      },
    ])
    
    const users = await repository.find(3)

    console.log(users)
    expect(prisma.user.findMany).toBeCalledTimes(1)
    expect(users).toHaveLength(3)
  })

  it('should find  2 users with cursor parameter', async () => {
    jest.spyOn(prisma.user, 'findMany').mockResolvedValue([
      {
        id: '2',
        name: 'name2',
        email: 'email2',
        age: 2,
        isActive: false,
      },
      {
        id: '3',
        name: 'name3',
        email: 'email3',
        age: 3,
        isActive: false,
      },
    ])
    
    const users = await repository.find(2, '2')

    console.log(users)
    expect(prisma.user.findMany).toBeCalledTimes(1)
    expect(users).toHaveLength(2)
  })
})