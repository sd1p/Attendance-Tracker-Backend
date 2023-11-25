"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = void 0;
const client_1 = require("../../prisma/generated/client");
const getClient = () => {
    if (!globalThis.prisma) {
        globalThis.prisma = new client_1.PrismaClient();
    }
    return globalThis.prisma;
};
exports.getClient = getClient;
exports.default = (0, exports.getClient)();
