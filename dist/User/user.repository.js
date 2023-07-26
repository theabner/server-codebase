"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const client_1 = require("@prisma/client");
const inversify_1 = require("inversify");
let UserRepository = class UserRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        if (!createUserDto.id)
            throw new Error('User should have an id');
        return await this.prisma.user.create({
            data: {
                id: createUserDto.id,
                name: createUserDto.name,
                email: createUserDto.email,
                age: createUserDto.age,
            },
        });
    }
    async update(createUserDto) {
        return await this.prisma.user.update({
            where: {
                id: createUserDto.id,
            },
            data: {
                name: createUserDto.name,
                email: createUserDto.email,
                age: createUserDto.age,
                isActive: createUserDto.isActive,
            },
        });
    }
    async delete(userID) {
        return await this.prisma.user.update({
            where: {
                id: userID,
            },
            data: {
                isActive: false,
            },
        });
    }
    async findById(userID) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userID,
            },
        });
        if (!user)
            throw new Error('User not found');
        return user;
    }
    async find() {
        return await this.prisma.user.findMany();
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)('PrismaClient')),
    __metadata("design:paramtypes", [client_1.PrismaClient])
], UserRepository);
