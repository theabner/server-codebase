import { UserController } from '../user.controller'

const UserResolver = (controller: UserController) => {
  return {
    Query: {
      findUser: (_: any, args: any) => {
        return controller.findById(args.userId)
      },
      findUsers: (_: any, args: any) => {
        return controller.find(args.take, args.lastUser)
      },
    },
    Mutation: {
      createUser: (_: any, args: any) => {
        return controller.create(args.input)
      },
      updateUser: (_: any, args: any) => {
        return controller.update(args.input)
      },
      deleteUser: (_: any, args: any) => {
        return controller.delete(args.userId)
      },
    },
  }
}

export { UserResolver }