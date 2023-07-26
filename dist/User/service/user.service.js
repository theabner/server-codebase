"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const uuid_1 = require("uuid");
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        createUserDto.id = (0, uuid_1.v4)();
        return await this.userRepository.create(createUserDto);
    }
    async update(createUserDto) {
        return await this.userRepository.update(createUserDto);
    }
    async delete(userId) {
        return await this.userRepository.delete(userId);
    }
    async findById(userId) {
        return await this.userRepository.findById(userId);
    }
    async find() {
        return await this.userRepository.find();
    }
}
exports.UserService = UserService;
