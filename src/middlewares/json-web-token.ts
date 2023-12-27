
import jwt, { JwtPayload } from "jsonwebtoken";

const secretKey = `${process.env.SECRET_KEY}`; 

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, secretKey, { expiresIn: "2h" }); 
};


export const verifyToken = (token: string): JwtPayload | string | null => {
  try {
    const decodedToken = jwt.verify(token, secretKey);
    return decodedToken as JwtPayload;
  } catch (error) {
    return null;
  }
};