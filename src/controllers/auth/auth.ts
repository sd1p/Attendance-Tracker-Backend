import { Response } from 'express';
import asyncHandler from 'express-async-handler';
import { getClient } from '../../config/prismadb';
import bcrypt from 'bcrypt';
import { generateToken, verifyToken } from '../../libs/jwtToken';
import { GetUserDetailsRequest, RegisterUserRequest} from './interface';
import ErrorHandler from '../../libs/ErrorHandler';

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
    }else{
      throw new ErrorHandler("User Already registerd",400);
    }

    res.json({ ...user, token }).status(200);
  }
);

export const getUserDetails = asyncHandler(
  async (req: GetUserDetailsRequest, res: Response): Promise<void> => {
    res.json({ user: req?.user }).status(200);
  }
);

export const loginUser = asyncHandler(
  async (req: RegisterUserRequest, res: Response): Promise<void> => {
    const { rollno, password, role, email } = req.body;

    const prisma = getClient();

    const user = await prisma.user.findFirst({
      where: {OR: [{rollno},{email}]}
     });

     const passwordsMatch = await bcrypt.compare(password, user?.password as string);

    if (passwordsMatch) {
      const token = await generateToken(user?.id as string);
      res.json({...user,token}).status(200);
    }else{
      throw new ErrorHandler("Invalid Credentials",400);
    }
  }
);