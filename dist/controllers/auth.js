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
exports.getuserDetails = exports.registerUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const prismadb_1 = require("../config/prismadb");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwtToken_1 = require("../libs/jwtToken");
var Role;
(function (Role) {
    Role["STUDENT"] = "STUDENT";
    Role["FACULTY"] = "FACULTY";
})(Role || (Role = {}));
const prisma = (0, prismadb_1.getClient)();
exports.registerUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, rollno, password, role, email } = (req.body);
    const hashedPassword = yield bcrypt_1.default.hash(password, 12);
    const user = yield prisma.user.create({
        data: {
            name,
            rollno,
            password: hashedPassword,
            email,
            role
        }
    });
    let token;
    if (user) {
        token = yield (0, jwtToken_1.generateToken)(user.id);
    }
    return res.json(Object.assign(Object.assign({}, user), { token })).status(200);
}));
exports.getuserDetails = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json({ user: req.user }).status(200);
}));
