import { Response } from "express";
import asyncHandler from "express-async-handler";
import { getClient } from "../../config/prismadb";
import ErrorHandler from "../../libs/ErrorHandler";
import { AddAttendanceRequest, GetAttendanceRequest } from "./interface";

// only student routes
export const addAttendance = asyncHandler(
  async (req: AddAttendanceRequest, res: Response): Promise<void> => {
    const { classId,rollno } = req.body;
    const prisma = getClient();

    const student= await prisma.user.findUnique({
      where:{
        rollno
      }
    })
    console.log(classId);
    
    
    const classDetails= await prisma.class.findUnique({
      where:{
        id:classId
      }
    })

    if(!student&&!classDetails){
      throw Error("Student not found");
    }

    const attendence = await prisma.attendence.create({
      data: {
        classId,
        userId: student?.id as string,
        subjectId:classDetails?.subjectId as string
      },
    });
    
    if (attendence) {
      res.json({ message: "Attendance Added", attendence }).status(200);
    } else {
      throw new ErrorHandler("Class Already created", 400);
    }
  }
);

export const getAttendance = asyncHandler(
  async (req: GetAttendanceRequest, res: Response): Promise<void> => {
    const prisma = getClient();
    const userId = req.user.id;
    const courseId = req.body.courseId;

    
    let whereCondition: {
      userId: string;
      subject?:{
        courseId?:string
      }
    } = {
      userId: userId,
    };

    if (courseId) {
      whereCondition.subject = { courseId: courseId as string };
    }

    const attendance = await prisma.attendence.findMany({
      where: whereCondition,
      include: {
        user: true,
        class: true,
      },
      orderBy:{
        createdAt:'desc'
      }
    });

    if (attendance) {
      res.json({ count: attendance.length, attendance }).status(200);
    } else {
      throw new ErrorHandler("No attendance records found", 404);
    }
  }
);
