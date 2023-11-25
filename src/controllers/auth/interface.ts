import { Request } from "express";

export enum Role {
  STUDENT = "STUDENT",
  FACULTY = "FACULTY",
}

export interface RegisterUserRequest extends Request {
  body: {
    name: string;
    rollno?: string;
    email?: string;
    role?: Role | undefined;
    password: string;
  };
}

export interface GetUserDetailsRequest extends Request {
  user?: {
    name?: string;
    rollno?: string;
    email?: string;
    role?: Role | undefined;
    password?: string;
  };
}

export interface loginRequest extends Request {
    body: {
        rollno?: string;
        email?: string;
        role?: Role | undefined;
        password: string;
      };
}
