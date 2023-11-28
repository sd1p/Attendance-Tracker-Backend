import { Request } from "express";

export enum Role {
  STUDENT = "STUDENT",
  FACULTY = "FACULTY",
}

export interface AddAttendanceRequest extends Request {
  body: {
    rollno: string;
    classId:string
  };
  user: {
    id: string;
    name: string;
    rollno?: string;
    email?: string;
    role: Role | undefined;
    password: string;
  },
}

export interface GetAttendanceRequest extends Request {
  user: {
    id: string;
    name: string;
    rollno?: string;
    email?: string;
    role: Role | undefined;
    password: string;
  },
  body:{
    courseId?:string;
  }
}
