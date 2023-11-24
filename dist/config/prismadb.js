"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = void 0;
const client_1 = require("@prisma/client");
const getClient = () => {
    if (process.env.NODE_ENV !== 'production') {
        if (!globalThis.prisma) {
            globalThis.prisma = new client_1.PrismaClient();
        }
        return globalThis.prisma;
    }
    else {
        return new client_1.PrismaClient();
    }
};
exports.getClient = getClient;
exports.default = (0, exports.getClient)();
// prisma singleton
