import express from 'express'
import { authorizedRoles, isAuthenticated } from '../middleware/authMiddleware';
import { createClass } from '../controllers/class/classController';
import { Role } from '../controllers/auth/interface';

const router =express.Router()


router.route("/class").post(isAuthenticated,authorizedRoles(Role.FACULTY),createClass);


export default router;