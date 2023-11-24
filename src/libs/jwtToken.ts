import jwt,{JwtPayload} from "jsonwebtoken"
// const sendToken = (user, statusCode, res) => {
//     const token = user.getJWTToken();
//     //options for cookie
//     const options = {
//       expires: new Date(
//         Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//       ),
//       httpOnly: true,
//     };
  
//     res.status(statusCode).cookie("token", token, options).json({
//       success: true,
//       user,
//       token,
//     });
//   };
  
//   module.exports = sendToken;

const secret=process.env.JWT_SECRET||"secret";

export const generateToken= async (id:string):Promise<string>=>{
   return  jwt.sign({ id },secret, {
        expiresIn: process.env.JWT_EXPIRE,
      });
}

export const verifyToken = async (token: string): Promise<{
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