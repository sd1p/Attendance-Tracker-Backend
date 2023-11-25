import { Response } from "express";
import asyncHandler from "express-async-handler";
import { getClient } from "../../config/prismadb";
import { generateToken } from "../../libs/jwtToken";
import { CreateClassRequest } from "./interface";
import ErrorHandler from "../../libs/ErrorHandler";

export const createClass = asyncHandler(
  async (req: CreateClassRequest, res: Response): Promise<void> => {
    const { sem, subject, start, duration } = req.body;
    const userId=req.user.id;
    const prisma = getClient();

    const createdClass = await prisma.class.create({
      data: {
        sem,
        subject,
        userId,
        start,
        duration,
      },
    });


    if (createClass) {
        res.json({createdClass}).status(200);
    } else {
      throw new ErrorHandler("Class Already created", 400);
    }

  }
);
