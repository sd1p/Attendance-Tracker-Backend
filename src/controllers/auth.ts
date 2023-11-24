import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { getClient } from '../config/prismadb';
import bcrypt from 'bcrypt';
import { generateToken, verifyToken } from '../libs/jwtToken';

enum Role {
  STUDENT = 'STUDENT',
  FACULTY = 'FACULTY',
}

interface RegisterUserRequest extends Request {
  body: {
    name: string;
    rollno?: string;
    email?: string;
    role?: Role|undefined;
    password: string;
  };
}

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
    }

    res.json({ ...user, token }).status(200);
  }
);

interface GetuserDetailsrRequest extends Request {
    user?: {
      name: string;
      rollno?: string;
      email?: string;
      role?: Role|undefined;
      password: string;
    };
  }

export const getuserDetails = asyncHandler(
  async (req: GetuserDetailsrRequest, res: Response): Promise<void> => {
    res.json({ user: req?.user }).status(200);
  }
);
