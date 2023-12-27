
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

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
