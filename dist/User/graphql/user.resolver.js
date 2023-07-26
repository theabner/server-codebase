"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const UserResolver = (controller) => {
    return {
        Query: {
            findUser: (_, args) => {
                return controller.findById(args.userId);
            },
            findUsers: () => {
                return controller.find();
            },
        },
        Mutation: {
            createUser: (_, args) => {
                return controller.create(args.input);
            },
            updateUser: (_, args) => {
                return controller.update(args.input);
            },
            deleteUser: (_, args) => {
                return controller.delete(args.userId);
            },
        },
    };
};
exports.UserResolver = UserResolver;
