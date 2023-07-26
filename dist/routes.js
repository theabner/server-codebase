"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const luxon_1 = require("luxon");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get('/health', (req, res) => {
    // let controller = container.get<UserController>(UserController);
    res.status(200).json({
        uptime: process.uptime(),
        timestamp: luxon_1.DateTime.now().toISO(),
    });
});
