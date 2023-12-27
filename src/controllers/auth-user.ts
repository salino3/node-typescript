import { Request, Response } from "express";


export const userLogin = async (req: Request, res: Response): Promise<void> => {
  await res.send("userLogin");
};


export const userLogout = async (req: Request, res: Response): Promise<void> => {
  await res.send("userLogout");
};






