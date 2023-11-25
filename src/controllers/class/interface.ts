import { Request } from "express";
import { Role } from "../auth/interface";

export interface CreateClassRequest extends Request {
    body: {
        sem:number;
        subject:string
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
  