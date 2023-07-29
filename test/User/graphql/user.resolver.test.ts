import { USER_MOCK } from '../mock/user.mock'
import { UserResolver } from '../../../src/User/graphql/user.resolver'
import { UserController } from '../../../src/User/user.controller'
import { AppModule } from '../../../src/module'

const controller: UserController = AppModule.get<UserController>(UserController)

beforeEach(() => {
  controller.create = jest.fn().mockResolvedValue(USER_MOCK[0]),
  controller.update = jest.fn().mockResolvedValue(USER_MOCK[1]),
  controller.delete = jest.fn().mockResolvedValue(USER_MOCK[2]),
  controller.find = jest.fn().mockResolvedValue(USER_MOCK),
  controller.findById = jest.fn().mockResolvedValue(USER_MOCK[3])
})

describe('UserResolver', () => {
  it('should create a user', async () => {
    const mockArgs = {
      input: {
        name: '1',
        email: '1',
        age: 1,
      },
    }
    const resolver = UserResolver(controller)
    const user = await resolver.Mutation.createUser(null, mockArgs)

    expect(user).toEqual(USER_MOCK[0])
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('age')
    expect(user).toHaveProperty('isActive')

    expect(controller.create).toBeCalledTimes(1)
  })

  it('should update a user', async () => {
    const mockArgs = {
      input: {
        id: '1',
        name: '1',
        email: '1',
        age: 1,
      },
    }
    const resolver = UserResolver(controller)
    const user = await resolver.Mutation.updateUser(null, mockArgs)

    expect(user).toEqual(USER_MOCK[1])
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('age')
    expect(user).toHaveProperty('isActive')

    expect(controller.update).toBeCalledTimes(1)
  })

  it('should delete a user', async () => {
    const mockArgs = {
      userId: '1',
    }
    const resolver = UserResolver(controller)
    const user = await resolver.Mutation.deleteUser(null, mockArgs)

    expect(user).toEqual(USER_MOCK[2])
    expect(user.isActive).toBe(false)

    expect(controller.delete).toBeCalledTimes(1)
  })

  it('should return a user', async () => {
    const resolver = UserResolver(controller)
    const user = await resolver.Query.findUser(null, { userId: '1' })

    expect(user).toEqual(USER_MOCK[3])
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('age')
    expect(user).toHaveProperty('isActive')

    expect(controller.findById).toBeCalledTimes(1)
  })

  it('should return a array of users', async () => {
    const resolver = UserResolver(controller)
    const users = await resolver.Query.findUsers(null, {})
    expect(users).toBeDefined()

    users.forEach(user => {
      expect(user).toHaveProperty('id')
      expect(user).toHaveProperty('name')
      expect(user).toHaveProperty('email')
      expect(user).toHaveProperty('age')
      expect(user).toHaveProperty('isActive')
    })

    expect(controller.find).toBeCalledTimes(1)
  })
})