import { inject, injectable } from 'inversify'
import { IUserService } from './interface/IUser.service'
import { UserDto } from './interface/User.dto'
import Joi  from 'joi'
import { User } from './user.entitiy'

@injectable()
class UserController {

  constructor(@inject('UserService') private readonly userService: IUserService) {}

  public async create(UserDto: UserDto): Promise<User> {

    const validationSchema = Joi.object({
      name: Joi.string().min(5).max(255).required(),
      email: Joi.string().email({ tlds: { allow: false } }).required(),
      age: Joi.number(),
      isActive: Joi.boolean(),
    })

    const { error } = await validationSchema.validate(UserDto)
    
    if (error) {
      throw new Error(error.message)
    }

    return await this.userService.create(UserDto)
  }

  public async update(UserDto: UserDto): Promise<User> {

    const validationSchema = Joi.object({
      id: Joi.string().required(),
      name: Joi.string().min(5).max(255).required(),
      email: Joi.string().email({ tlds: { allow: false } }).required(),
      age: Joi.number(),
      isActive: Joi.boolean(),
    })

    const { error } = await validationSchema.validate(UserDto)
    
    if (error) {
      throw new Error(error.message)
    }
    
    return await this.userService.update(UserDto)
  }

  public async delete(userId: string): Promise<User> {
    return await this.userService.delete(userId)
  }

  public async findById(userId: string): Promise<User> {
    return await this.userService.findById(userId)
  }

  public async find(take?: number, lastUser?: string): Promise<User[]> {
    return await this.userService.find(take, lastUser)
  }
}

export { UserController } 