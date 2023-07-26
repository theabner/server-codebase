"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = require("graphql-http/lib/use/express");
const express_2 = __importDefault(require("express"));
const routes_1 = require("./routes");
const schema_1 = require("./schema");
const server = (0, express_2.default)();
exports.server = server;
server.use(express_2.default.json());
server.use(routes_1.routes);
server.use('/graphql', (0, express_1.createHandler)({
    schema: schema_1.schema,
}));
