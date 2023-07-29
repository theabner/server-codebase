import { join, resolve} from 'path'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { loadFilesSync } from '@graphql-tools/load-files'
import { UserResolver } from './User/graphql/user.resolver'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { UserController } from './User/user.controller'
import { AppModule } from './module'

const userController = AppModule.resolve<UserController>(UserController)

const typesArray = loadFilesSync(join(resolve(),'src'), { 
  extensions: ['graphql'], 
})

const typeDefs = mergeTypeDefs(typesArray)

const resolvers = mergeResolvers([
  UserResolver(userController),
])

const GraphqlSchema = makeExecutableSchema({ 
  typeDefs,
  resolvers,
})

export { GraphqlSchema }