import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/user";
import { generateToken } from "../middlewares";


export const userLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Verificar si el usuario existe en la base de datos
    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // Comparar la contraseña proporcionada con la almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // Generar un token JWT con la información del usuario
    const token = generateToken({ userId: user.id, email: user.email });

    // Configurar la cookie con el token
    res.cookie("token", token, {
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
  // Delete token
  res.clearCookie("token");

  res.status(200).json({ message: "Logout successful" });
};
