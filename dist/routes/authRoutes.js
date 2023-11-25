"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controllers/auth");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.route("/register").post(auth_1.registerUser);
router.route("/user").get(authMiddleware_1.isAuthenticated, auth_1.getuserDetails);
exports.default = router;
