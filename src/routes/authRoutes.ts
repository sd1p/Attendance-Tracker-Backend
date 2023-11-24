import express from 'express'
import {getuserDetails, registerUser} from "../controllers/auth"
import { isAuthenticated } from '../middleware/authMiddleware';

const router =express.Router()

router.route("/register").post(registerUser);
router.route("/user").get(isAuthenticated,getuserDetails);


export default router;