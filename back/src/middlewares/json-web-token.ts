
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import UserModel from "../models/user";

interface DecodedToken extends JwtPayload {};

declare global {
  namespace Express {
    interface Request {
      user?: DecodedToken;
    }
  }
};


const secretKey = `${process.env.SECRET_KEY}`; 

// Set collection of revoked tokens
export const revokedTokens: Set<string> = new Set();


export const generateToken = (payload: object): string => {
  return jwt.sign(payload, secretKey, { expiresIn: "2h" }); 
};


export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token: string | undefined = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Token missing" });
  };

  // Set Collection
  if (revokedTokens.has(token)) {
    return res.status(401).json({ message: "Unauthorized: Token revoked" });
  };

  try {
    const decodedToken = jwt.verify(token, secretKey);

    if (!decodedToken) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    req.user = decodedToken as JwtPayload;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  };
};


export const verifyAdmin = async (req: Request, res: Response, next: NextFunction) => {

  const idAdmin = req.params.idAdmin;

  try {

    const existingUser = await UserModel.findByPk(idAdmin);
    
    if (!existingUser) {
      res.status(404).json({ message: "User Admin not found" });
      return;
    };

    if (existingUser.role !== "admin") {
      res.status(403).json({
        message:
          "Forbidden: Only admins have permission to perform this action",
      });
      return;
    } else {
      next();
    };
  } catch (error) {
     console.error(error);
     res.status(500);
  };
};
