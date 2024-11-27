import { Response } from "express";
import asyncHandler from "express-async-handler";
import { getClient } from "../../config/prismadb";
import { CreateClassRequest, getClassAttendanceRequest } from "./interface";
import ErrorHandler from "../../libs/ErrorHandler";

export const createClass = asyncHandler(
  async (req: CreateClassRequest, res: Response): Promise<void> => {
    const { courseId, start, duration } = req.body;
    const userId = req.user.id;
    const prisma = getClient();

    const subject = await prisma.subject.findUnique({
      where: {
        courseId,
      },
    });

    if (!subject) {
      throw new ErrorHandler("Invalid subject", 400);
    }

    const createdClass = await prisma.class.create({
      data: {
        subjectId: subject.id,
        userId,
        start,
        duration,
      },
      include: {
        subject: true,
      },
    });

    res.status(201).json({ createdClass });
  }
);

export const getClass = asyncHandler(
  async (req: CreateClassRequest, res: Response): Promise<void> => {
    const userId = req.user.id;
    const prisma = getClient();

    const classes = await prisma.class.findMany({
      where: {
        userId,
      },
      include: {
        subject: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (classes.length > 0) {
      res.status(200).json(classes);
    } else {
      throw new ErrorHandler("Classes not found", 404);
    }
  }
);

export const getClassAttendance = asyncHandler(
  async (req: getClassAttendanceRequest, res: Response): Promise<void> => {
    const { classId } = req.body;
    const prisma = getClient();

    const attendance = await prisma.class.findUnique({
      where: {
        id: classId,
      },
      include: {
        Attendence: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                rollno: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!attendance) {
      throw new ErrorHandler("Class not found", 404);
    }

    res.status(200).json(attendance);
  }
);
