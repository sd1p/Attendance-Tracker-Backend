import { Response } from "express";
import asyncHandler from "express-async-handler";
import { getClient } from "../../config/prismadb";
import ErrorHandler from "../../libs/ErrorHandler";
import { AddAttendanceRequest, GetAttendanceRequest } from "./interface";

// only student routes
export const addAttendance = asyncHandler(
  async (req: AddAttendanceRequest, res: Response): Promise<void> => {
    const { classId,userId } = req.body;
    const prisma = getClient();

    const attandance = await prisma.attendence.create({
      data: {
        classId,
        userId,
      },
    });

    if (attandance) {
      res.json({ message: "Attendance Added", attandance }).status(200);
    } else {
      throw new ErrorHandler("Class Already created", 400);
    }
  }
);

export const getAttendance = asyncHandler(
  async (req: GetAttendanceRequest, res: Response): Promise<void> => {
    const prisma = getClient();
    const userId = req.user.id;
    const classId = req.body.classId;

    const whereCondition: {
      userId: string;
      classId?: string;
    } = {
      userId: userId,
    };

    if (classId) {
      whereCondition.classId = classId as string;
    }

    const attendance = await prisma.attendence.findMany({
      where: whereCondition,
      include: {
        user: true,
        class: true,
      },
    });

    if (attendance) {
      res.json({ count: attendance.length, attendance }).status(200);
    } else {
      throw new ErrorHandler("No attendance records found", 404);
    }
  }
);
