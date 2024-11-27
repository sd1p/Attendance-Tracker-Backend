import jwt, { JwtPayload } from "jsonwebtoken";

const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error("JWT_SECRET is not defined");
}

export const generateToken = async (id: string): Promise<string> => {
  return jwt.sign({ id }, secret, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

export const verifyToken = async (
  token: string
): Promise<{
  id: string;
  iat: number;
  exp: number;
}> => {
  const decodedToken = jwt.verify(token, secret) as JwtPayload;
  return {
    id: decodedToken.id as string,
    iat: decodedToken.iat as number,
    exp: decodedToken.exp as number,
  };
};
