import { Request, Response } from "express";
import UserModel from "../models/user";



interface UserProps extends Omit<UserModel, "id" | "createdAt" | "updatedAt"> {}


export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await UserModel.findAll();

  if (!users) {
    res.send("Error, the table does not have users.");
    return;
  }

  try {
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500);
  };
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
  const user: UserProps = req.body;

  if (!user) {
    res.status(400).json({ message: "Error: Invalid user data" });
    return;
  };

  const isAdult = user.age >= 18 ? true : false;

  try {
    const newUser = await UserModel.create({...user, isAdult: isAdult});

    res.status(201).json(newUser); 
  } catch (error: any) {
    console.error(error);

    if (error.name === "SequelizeValidationError") {
      res
        .status(400)
        .json({ message: "Error: Validation failed", errors: error.errors });
    } else if (
      error.name === "SequelizeUniqueConstraintError" &&
      error.errors?.length > 0) {

      const uniqueError = error.errors.find((err: any) => err.type === "unique violation" && err.path === "email");

      if (uniqueError) {
        res
          .status(400)
          .json({ message: "Error: Email already exists", field: "email" });
      } else {
        res
          .status(400)
          .json({ message: "Error: Validation failed", errors: error.errors });
      }
    } else {
      res.status(500).json({ message: "Error: Failed to create user" });
    }
  };
};
