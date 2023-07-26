"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const inversify_1 = require("inversify");
const user_service_1 = require("./user.service");
const user_repository_1 = require("./user.repository");
const user_controller_1 = require("./user.controller");
const UserModule = new inversify_1.ContainerModule((bind) => {
    bind('UserRepository').to(user_repository_1.UserRepository);
    bind('UserService').to(user_service_1.UserService);
    bind(user_controller_1.UserController).toSelf();
});
exports.UserModule = UserModule;
