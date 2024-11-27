import { Response } from "express";
import asyncHandler from "express-async-handler";
import { getClient } from "../../config/prismadb";
import bcrypt from "bcrypt";
import { generateToken } from "../../libs/jwtToken";
import { GetUserDetailsRequest, RegisterUserRequest } from "./interface";
import ErrorHandler from "../../libs/ErrorHandler";

export const registerUser = asyncHandler(
  async (req: RegisterUserRequest, res: Response): Promise<void> => {
    const { name, rollno, password, role, email } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const prisma = getClient();
    const user = await prisma.user.create({
      data: {
        name,
        rollno,
        password: hashedPassword,
        email,
        role,
      },
    });

    let token;

    if (user) {
      token = await generateToken(user.id);
      const { password, ...userWithoutPassword } = user;
      res.status(200).json({ ...userWithoutPassword, token });
    } else {
      throw new ErrorHandler("User Already registered", 400);
    }
  }
);

export const getUserDetails = asyncHandler(
  async (req: GetUserDetailsRequest, res: Response): Promise<void> => {
    if (req?.user) {
      const { password, ...userWithoutPassword } = req.user;
      res.status(200).json({ user: userWithoutPassword });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }
);

export const loginUser = asyncHandler(
  async (req: RegisterUserRequest, res: Response): Promise<void> => {
    const { rollno, password, role, email } = req.body;

    const prisma = getClient();

    const user = await prisma.user.findFirst({
      where: { OR: [{ rollno }, { email }] },
    });

    if (user) {
      const passwordsMatch = await bcrypt.compare(password, user.password);

      if (passwordsMatch) {
        const token = await generateToken(user.id);
        const { password, ...userWithoutPassword } = user;
        res.status(200).json({ ...userWithoutPassword, token });
      } else {
        throw new ErrorHandler("Invalid Credentials", 400);
      }
    } else {
      throw new ErrorHandler("User not found", 404);
    }
  }
);
