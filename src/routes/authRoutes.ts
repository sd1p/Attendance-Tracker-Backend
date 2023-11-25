import express from 'express'
import {getUserDetails, loginUser, registerUser} from "../controllers/auth/authController"
import { isAuthenticated } from '../middleware/authMiddleware';

const router =express.Router()

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/user").get(isAuthenticated,getUserDetails);


export default router;