import { Request } from "express";
import { Role } from "../auth/interface";

export interface CreateClassRequest extends Request {
    body: {
        courseId:string
        userId:string
        start:string,
        duration:string
    },
    user: {
        id: string;
        name: string;
        rollno?: string;
        email?: string;
        role: Role | undefined;
        password: string;
      },
  }
  
export interface getClassAttendanceRequest extends Request {
    body: {
        classId:string
    },
    user: {
        id: string;
        name: string;
        rollno?: string;
        email?: string;
        role: Role | undefined;
        password: string;
      },
  }
  