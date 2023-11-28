import express from 'express'
import { authorizedRoles, isAuthenticated } from '../middleware/authMiddleware';
import { createClass, getClass, getClassAttendance } from '../controllers/class/classController';
import { Role } from '../controllers/auth/interface';

const router =express.Router()


router.route("/class").post(isAuthenticated,authorizedRoles(Role.FACULTY),createClass);
router.route("/class").get(isAuthenticated,authorizedRoles(Role.FACULTY),getClass);
router.route("/class-attendance").get(isAuthenticated,authorizedRoles(Role.FACULTY),getClassAttendance);


export default router;