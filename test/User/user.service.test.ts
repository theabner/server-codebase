import  { USER_MOCK } from './mock/user.mock'
import { IUserService } from '../../src/User/interface/IUser.service'
import { IUserRepository } from '../../src/User/interface/IUser.repository'
import { UserService } from '../../src/User/user.service'
import { 
  describe, 
  expect, 
  it, 
  beforeEach, 
} from '@jest/globals'

let service: IUserService
const repositoryMock: IUserRepository = {
  create: jest.fn().mockResolvedValue(USER_MOCK[0]),
  update: jest.fn().mockResolvedValue(USER_MOCK[1]),
  delete: jest.fn().mockResolvedValue(USER_MOCK[2]),
  find: jest.fn().mockResolvedValue(USER_MOCK),
  findById: jest.fn().mockResolvedValue(USER_MOCK[3]),
}

beforeEach(() => {
  service = new UserService(repositoryMock)
})

describe('UserService', () => {
  it('should create a user', async () => {
    const user = await service.create({
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
    expect(repositoryMock.create).toBeCalledTimes(1)
  })

  it('should update a user', async () => {
    const user = await service.update({
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

    expect(repositoryMock.update).toBeCalledTimes(1)
  })

  it('should delete a user', async () => {
    const user = await service.delete('1')

    expect(user).toEqual(USER_MOCK[2])
    expect(user.isActive).toBe(false)
    expect(repositoryMock.delete).toBeCalledTimes(1)
  })

  it('should find a user', async () => {
    const user = await service.findById('1')

    expect(user).toEqual(USER_MOCK[3])
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('age')
    expect(user).toHaveProperty('isActive')

    expect(repositoryMock.findById).toBeCalledTimes(1)
  })

  it('should find all users', async () => {
    const users = await service.find()

    expect(users).toEqual(USER_MOCK)
    expect(repositoryMock.find).toBeCalledTimes(1)
    expect(users).toHaveLength(5)
  })
})