import asyncHandler from "express-async-handler";
import { getClient } from "../config/prismadb";
import { generateToken, verifyToken } from "../libs/jwtToken";
import ErrorHandler from "../libs/ErrorHandler";

const prisma = getClient();

export const isAuthenticated = asyncHandler(async (req, res, next) => {
  let token;

  // Check if the Authorization header is present and starts with 'Bearer'
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Get token from the Authorization header
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  // Verify the token
  const decodedData = await verifyToken(token);
  // Find the user associated with the decoded data
  req.user = await prisma.user.findUnique({
    where: {
      id: decodedData.id as string,
    },
  });

  next();
});
