import { Response } from "express";
import asyncHandler from "express-async-handler";
import { getClient } from "../../config/prismadb";
import { generateToken } from "../../libs/jwtToken";
import { CreateClassRequest } from "./interface";
import ErrorHandler from "../../libs/ErrorHandler";

export const createClass = asyncHandler(
  async (req: CreateClassRequest, res: Response): Promise<void> => {
    const { courseId, start, duration } = req.body;
    const userId=req.user.id;
    const prisma = getClient();


    const subject = await prisma.subject.findUnique({
      where:{
        courseId
      }
    })
    
     if(!subject){
      throw Error('invalid subject');
     }
    const createdClass = await prisma.class.create({
      data: {
        subjectId:subject?.id,
        userId,
        start,
        duration,
      },
      include:{
        subject:true
      }
    });


    if (createClass) {
        res.json({createdClass}).status(200);
    } else {
      throw new ErrorHandler("Class Already created", 400);
    }

  }
);

export const getClass = asyncHandler(
  async (req: CreateClassRequest, res: Response): Promise<void> => {
    const userId=req.user.id;
    const prisma = getClient();


    const classes = await prisma.class.findMany({
      where:{
        userId
      },
      include:{
        subject:true
      },
      orderBy:{
        createdAt:"desc"
      }
    })


    if (createClass) {
        res.json(classes).status(200);
    } else {
      throw new ErrorHandler("Class Already created", 400);
    }

  }
);
