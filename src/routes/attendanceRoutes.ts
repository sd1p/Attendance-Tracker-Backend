import express from 'express'
import { isAuthenticated,authorizedRoles } from '../middleware/authMiddleware';
import { addAttendance, getAttendance, } from '../controllers/attendance/attendanceController';

const router =express.Router()

export enum Role {
    STUDENT = "STUDENT",
    FACULTY = "FACULTY",
  }

router.route("/attendance").post(isAuthenticated,authorizedRoles(Role.STUDENT),addAttendance);
router.route("/attendance").get(isAuthenticated,authorizedRoles(Role.STUDENT),getAttendance);


export default router;