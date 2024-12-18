import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { getClient } from "../config/prismadb";
import { verifyToken } from "../libs/jwtToken";
import ErrorHandler from "../libs/ErrorHandler";
import { Role } from "../controllers/attendance/interface";

const prisma = getClient();

interface DecodedData {
  id: string;
}

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    name: string;
    rollno?: string;
    email?: string;
    role: string;
    password: string;
  };
}

export const isAuthenticated = asyncHandler(
  async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(
        new ErrorHandler("Please login to access this resource", 401)
      );
    }

    const decodedData = (await verifyToken(token)) as DecodedData;

    const user = await prisma.user.findUnique({
      where: {
        id: decodedData.id,
      },
    });

    if (!user) {
      return next(
        new ErrorHandler("User Not Logged In (Token expired or invalid)", 404)
      );
    }

    req.user = {
      id: decodedData.id,
      name: user.name,
      rollno: user.rollno || undefined,
      email: user.email || undefined,
      role: user.role || undefined,
      password: user.password,
    };

    next();
  }
);

export const authorizedRoles = (allowedRole: Role) => {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {
    if (req.user?.role !== allowedRole) {
      return next(
        new ErrorHandler(
          `Role ${req.user?.role} is not allowed to access this resource`,
          403
        )
      );
    }

    next();
  };
};
