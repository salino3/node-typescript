import { Request, Response } from "express";
import bcrypt from "bcrypt";
import UserModel from "../models/user";
import { generateToken, revokedTokens } from "../middlewares";


export const userLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Verify if the user exist
    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // Compare password in database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // Generate token JWT with user information
    const token = generateToken({ userId: user.id, email: user.email });

    // Token configuration
    res.cookie("my-token", token, {
      httpOnly: true, // Not reachable with Javascript code
      secure: process.env.NODE_ENV === "production", // Establish at true in 'production' for use HTTPS
      maxAge: 2 * 60 * 60 * 1000, // Time of expiration de expiración in milliseconds (2 hours)
      sameSite: "strict", // Against a malicious link on an external site), which improves security against CSRF.
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  };
};


export const userLogout = async ( req: Request, res: Response ): Promise<void> => {
    try {

    const token = req.cookies["my-token"];

    if (token) {
      revokedTokens.add(token);
    };

    // Delete token
    res.clearCookie("my-token");

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({ message: "Internal server error during logout" });
  }
};



