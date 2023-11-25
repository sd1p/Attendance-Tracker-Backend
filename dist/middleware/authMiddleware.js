"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const prismadb_1 = require("../config/prismadb");
const jwtToken_1 = require("../libs/jwtToken");
const ErrorHandler_1 = __importDefault(require("../libs/ErrorHandler"));
const prisma = (0, prismadb_1.getClient)();
exports.isAuthenticated = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    // Check if the Authorization header is present and starts with 'Bearer'
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // Get token from the Authorization header
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return next(new ErrorHandler_1.default('Please login to access this resource', 401));
    }
    // Verify the token
    const decodedData = yield (0, jwtToken_1.verifyToken)(token);
    // Find the user associated with the decoded data
    const user = yield prisma.user.findUnique({
        where: {
            id: decodedData.id,
        },
    });
    if (!user) {
        // Handle the case where the user is not found
        return next(new ErrorHandler_1.default('User not found', 404));
    }
    // Assign the user to the request
    req.user = {
        name: user.name,
        rollno: user.rollno || undefined,
        email: user.email || undefined,
        role: user.role || undefined,
        password: user.password,
    };
    next();
}));
