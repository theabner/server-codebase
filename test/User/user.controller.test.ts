import  { USER_MOCK } from './mock/user.mock'
import { IUserService } from '../../src/User/interface/IUser.service'
import { UserController } from '../../src/User/user.controller'


let controller: UserController
const serviceMock: IUserService = {
  create: jest.fn().mockResolvedValue(USER_MOCK[0]),
  update: jest.fn().mockResolvedValue(USER_MOCK[1]),
  delete: jest.fn().mockResolvedValue(USER_MOCK[2]),
  find: jest.fn().mockResolvedValue(USER_MOCK),
  findById: jest.fn().mockResolvedValue(USER_MOCK[3]),
}

beforeEach(() => {
  controller = new UserController(serviceMock)
})

describe('UserController', () => {
  it('should create a user', async () => {
    const user = await controller.create({
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
    expect(serviceMock.create).toBeCalledTimes(1)
  })

  it('should update a user', async () => {
    const user = await controller.update({
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

    expect(serviceMock.update).toBeCalledTimes(1)
  })

  it('should delete a user', async () => {
    const user = await controller.delete('1')

    expect(user).toEqual(USER_MOCK[2])
    expect(user.isActive).toBe(false)
    expect(serviceMock.delete).toBeCalledTimes(1)
  })

  it('should find a user', async () => {
    const user = await controller.findById('1')

    expect(user).toEqual(USER_MOCK[3])
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('age')
    expect(user).toHaveProperty('isActive')

    expect(serviceMock.findById).toBeCalledTimes(1)
  })

  it('should find all users', async () => {
    const users = await controller.find()

    expect(users).toEqual(USER_MOCK)
    expect(serviceMock.find).toBeCalledTimes(1)
    expect(users).toHaveLength(5)
  })
})