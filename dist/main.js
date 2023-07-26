"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = require("./server");
server_1.server.listen(3000, () => {
    console.log('Listening on port 3000');
});
