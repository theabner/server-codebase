"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(createUserDto) {
        return await this.userService.create(createUserDto);
    }
    async update(createUserDto) {
        return await this.userService.update(createUserDto);
    }
    async delete(userId) {
        return await this.userService.delete(userId);
    }
    async findById(userId) {
        return await this.userService.findById(userId);
    }
    async find() {
        return await this.userService.find();
    }
}
exports.UserController = UserController;
