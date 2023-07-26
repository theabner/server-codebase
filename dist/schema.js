"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const path_1 = require("path");
const schema_1 = require("@graphql-tools/schema");
const load_files_1 = require("@graphql-tools/load-files");
const user_resolver_1 = require("./User/graphql/user.resolver");
const merge_1 = require("@graphql-tools/merge");
const user_controller_1 = require("./User/user.controller");
const module_1 = require("./module");
const userController = module_1.aplicationModule.resolve(user_controller_1.UserController);
const typesArray = (0, load_files_1.loadFilesSync)((0, path_1.join)((0, path_1.resolve)(), 'src'), {
    extensions: ['graphql'],
});
const typeDefs = (0, merge_1.mergeTypeDefs)(typesArray);
const resolvers = (0, merge_1.mergeResolvers)([
    (0, user_resolver_1.UserResolver)(userController),
]);
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs,
    resolvers,
});
exports.schema = schema;
