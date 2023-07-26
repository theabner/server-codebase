"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const client_1 = require("@prisma/client");
class UserRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(createUserDto) {
        if (!createUserDto.id)
            throw new Error("User should have an id");
        return await this.prisma.user.create({
            data: {
                id: createUserDto.id,
                name: createUserDto.name,
                email: createUserDto.email,
                age: createUserDto.age
            }
        });
    }
    async update(createUserDto) {
        return await this.prisma.user.update({
            where: {
                id: createUserDto.id
            },
            data: {
                name: createUserDto.name,
                email: createUserDto.email,
                age: createUserDto.age,
                isActive: createUserDto.isActive,
            }
        });
    }
    async delete(userID) {
        return await this.prisma.user.update({
            where: {
                id: userID
            },
            data: {
                isActive: false
            }
        });
    }
    async findById(userID) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userID
            }
        });
        if (!user)
            throw new Error("User not found");
        return user;
    }
    async find() {
        return await this.prisma.user.findMany();
    }
}
exports.UserRepository = UserRepository;
