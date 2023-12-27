import { Request, Response, NextFunction } from "express";

interface TokenInfo {
  requestsMade: number;
  lastReset: number;
};

const token1: string | undefined = process.env.TOKEN1;
const token2: string | undefined = process.env.TOKEN2;
const token3: string | undefined = process.env.TOKEN3;

if (!token1) {
  console.error("The first token has not been defined in the .env file");
  process.exit(1);
};

// Hardcoded tokens
export const tokens: Record<string, TokenInfo> = {
  [token1!]: { requestsMade: 0, lastReset: Date.now() },
  [token2!]: { requestsMade: 0, lastReset: Date.now() },
  [token3!]: { requestsMade: 0, lastReset: Date.now() },
};

// Middleware to validate token and check request limit
export const tokenAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  console.log("Request Headers:", req.headers.authorization);
  console.log("Authorization Token:", token);

  if (!token || !tokens[token]) {
    return res.status(401).send("Invalid or missing token");
  }

  const tokenInfo = tokens[token];
  const currentTime = Date.now();

  // Reset request count every 24 hours
  if (currentTime - tokenInfo.lastReset > 86400000) {
    tokenInfo.requestsMade = 0;
    tokenInfo.lastReset = currentTime;
  }
  if (tokenInfo.requestsMade >= 1000) {
    return res.status(429).send("Request limit reached");
  }

  tokenInfo.requestsMade++;

  next();
};
