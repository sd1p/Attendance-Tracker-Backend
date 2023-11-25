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
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// const sendToken = (user, statusCode, res) => {
//     const token = user.getJWTToken();
//     //options for cookie
//     const options = {
//       expires: new Date(
//         Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//       ),
//       httpOnly: true,
//     };
//     res.status(statusCode).cookie("token", token, options).json({
//       success: true,
//       user,
//       token,
//     });
//   };
//   module.exports = sendToken;
const secret = process.env.JWT_SECRET || "secret";
const generateToken = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return jsonwebtoken_1.default.sign({ id }, secret, {
        expiresIn: process.env.JWT_EXPIRE,
    });
});
exports.generateToken = generateToken;
const verifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = jsonwebtoken_1.default.verify(token, secret);
    return {
        id: decodedToken.id,
        iat: decodedToken.iat,
        exp: decodedToken.exp,
    };
});
exports.verifyToken = verifyToken;
