
import asyncHandler from "express-async-handler"
import {getClient}  from "../config/prismadb";
import bcrypt from 'bcrypt'
import { generateToken,verifyToken } from "../libs/jwtToken";

enum Role {
    STUDENT = "STUDENT",
    FACULTY = "FACULTY",
}

const prisma=getClient();

export const registerUser = asyncHandler(async (req, res, next) => {
  
    const { name,rollno,password,role,email } = (req.body) as {
        name:string,
        rollno?:string
        email?:string
        role?:Role
        password:string
    };
  
    const hashedPassword = await bcrypt.hash(password, 12);


    const user = await prisma.user.create(
        {
            data:{
                name,
                rollno,
                password:hashedPassword,
                email,
                role
            }
        }
    )

    let token;

    if(user){
        token= await generateToken(user.id);
    }
    
    return res.json({...user,token}).status(200)
  });
  

export const getuserDetails = asyncHandler(async (req, res, next) => {
  
    return res.json({user:req.user}).status(200)
  });