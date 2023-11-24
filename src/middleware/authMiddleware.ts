import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { getClient } from '../config/prismadb';
import { generateToken, verifyToken } from '../libs/jwtToken';
import ErrorHandler from '../libs/ErrorHandler';

const prisma = getClient();

interface DecodedData {
  id: string;
  // Add other properties from your decoded token if needed
}

// Extend the Request interface to include the user property
interface AuthenticatedRequest extends Request {
  user: {
    name: string;
    rollno?: string;
    email?: string;
    role?: string;
    password: string;
  }; // Replace YourUserType with the actual type of your user
}

export const isAuthenticated = asyncHandler(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    let token;

    // Check if the Authorization header is present and starts with 'Bearer'
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      // Get token from the Authorization header
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return next(new ErrorHandler('Please login to access this resource', 401));
    }

    // Verify the token
    const decodedData = await verifyToken(token) as DecodedData;

    // Find the user associated with the decoded data
    const user = await prisma.user.findUnique({
      where: {
        id: decodedData.id,
      },
    });

    if (!user) {
      // Handle the case where the user is not found
      return next(new ErrorHandler('User not found', 404));
    }

    // Assign the user to the request
    req.user = {
      name: user.name,
      rollno: user.rollno || undefined,
      email: user.email || undefined,
      role: user.role || undefined,
      password: user.password,
    };

    next();
  }
);
