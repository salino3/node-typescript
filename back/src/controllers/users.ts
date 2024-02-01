import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/user";
import { hashPassword, revokedTokens } from '../middlewares';



interface UserProps extends Omit<UserModel, "id" | "createdAt" | "updatedAt"> {}

function formatedData (item: UserModel) {
  const user = {
    id: item.id,
    name: item.name,
    surname: item.surname,
    email: item.email,
    age: item.age,
    job: item.job,
    isAdult: item.isAdult,
    gender: item.gender,
    role: item.role,
    //  createdAt: item.createdAt,
    //  updatedAt: item.updatedAt
  };
    return user
};


export const getUsers = async (req: Request, res: Response): Promise<void> => {
  
  try {
    const users = await UserModel.findAll();
  
    if (!users) {
      res.send("Error, the table does not have users.");
      return;
    };
    
     const usersWithoutPassword = users.map((item: UserModel) => formatedData(item));


    res.json(usersWithoutPassword);
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

  const hashedPassword = await hashPassword(user.password);

  const isAdult = user.age >= 18 ? true : false;

  try {
    const newUser = await UserModel.create({
      ...user,
      password: hashedPassword,
      role: "user",
      isAdult,
    });

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

export const getOne = async (req: Request, res: Response): Promise<void> => {

 const id = req.params.id;

 try {
  
   const user = await UserModel.findByPk(id);

   if(!user) {
    res.status(404).json({message: "User not found"});
    return;
   };

    const userWithoutPassword = [user].map((item: UserModel) =>
          formatedData(item)
    );

   res.status(200).json(userWithoutPassword);
 } catch (error) {
  console.error(error);
  res.status(500);
 };
};

 
export const updateUser = async (req: Request, res: Response): Promise<void> => {

   const id = req.params.id;
   const token: string | undefined = req.headers.authorization?.split(" ")[1];
   const userData = req.body; 

   try {
     const existingUser = await UserModel.findByPk(id);

     if (!existingUser) {
       res.status(404).json({ message: "User not found" });
       return;
     }

     //
     if (!token) {
       res.status(403).json({
         message: "Forbidden: Token not provided",
       });
       return;
     };

     const decodedToken: any = jwt.verify(token, `${process.env.SECRET_KEY}`);

     if (decodedToken.role !== "admin"){

      if (decodedToken.userId !== id) {
       res.status(403).json({
         message: "Forbidden: You don't have permission to update this user",
       });
       return;
      }
     }

       // Verify if new email is already in use
       if (userData.email !== existingUser.email) {
       const userWithNewEmail = await UserModel.findOne({
         where: { email: userData.email },
       });

       if (userWithNewEmail) {
         res.status(400).json({ message: "Error: Email is already in use" });
         return;
       };
     }

     await existingUser.update({
       ...userData,
       password: existingUser?.password,
       isAdult: userData.age >= 18,
     });

     res.status(200).json({ message: "User update successfully" });
   } catch (error: any) {
    console.error(error);
    
       if (error.name === "SequelizeValidationError") {
         res
           .status(400)
           .json({ message: "Error: Validation failed", errors: error.errors });
       } else {
         res.status(500).json({ message: "Error: Failed to update user" });
       }
   };
};


export const updateUserPassword = async ( req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const token: string | undefined = req.headers.authorization?.split(" ")[1];
  const userData = req.body;

  try {
    const existingUser = await UserModel.findByPk(id);

    if (!existingUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    //
    if (!token) {
      res.status(403).json({
        message: "Forbidden: Token not provided",
      });
      return;
    }

    const decodedToken: any = jwt.verify(token, `${process.env.SECRET_KEY}`);

    if (decodedToken.role !== "admin"){

     if (decodedToken.userId !== id) {
       res.status(403).json({
         message: "Forbidden: You don't have permission to update this user",
       });
       return;
     }
    }


    if (userData.password) {
        // Encrypting password of req.body
        const hashedPassword = await hashPassword(userData.password);
        userData.password = hashedPassword;
      }
      
      await existingUser.update({ password: userData.password });

    res.status(200).json({ message: "User update successfully" });
  } catch (error: any) {
    console.error(error);

    if (error.name === "SequelizeValidationError") {
      res
        .status(400)
        .json({ message: "Error: Validation failed", errors: error.errors });
    } else {
      res.status(500).json({ message: "Error: Failed to update user" });
    }
  }
};


export const deleteUser = async (req: Request, res: Response): Promise<void> => {

  const id = req.params.id;
  const token: string | undefined = req.headers.authorization?.split(" ")[1];
  const { email, password } = req.body;

  try {

    if (!token) {
      res.status(403).json({
        message: "Forbidden: Token not provided",
      });
      return;
    };

    // Verify if the user exist
    const user = await UserModel.findOne({ where: { email } });

    if (!user || !password) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    };

    // Compare password in database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    };
    
     const decodedToken: any = jwt.verify(token, `${process.env.SECRET_KEY}`); 

     if (decodedToken.userId !== id) {
       res.status(403).json({
         message:
           "Forbidden: You don't have permission to delete this user",
       });
       return;
     };
    
    await UserModel.destroy({
      where: {
          id: id
        },
      });

      res.status(200).json({message: "User deleted successfully"})
  } catch (error) {
    console.error(error);
    res.status(500);
  };
};


export const deleteUserByAdmin = async (req: Request, res: Response): Promise<void> => {

   const id = req.params.id;
     const { email, password } = req.body;

   try {
     // Verify if the user exist
     const user = await UserModel.findOne({ where: { email } });

     if (!user) {
       res.status(401).json({ message: "Invalid credentials" });
       return;
     };

     // Compare password in database
     const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
      };

     await UserModel.destroy({
       where: {
         id: id,
       },
     });

     res.status(200).json({ message: "User deleted successfully" });

      const token = req.cookies[`my-token-${id}`];
      
      if (token) {
        revokedTokens.add(token);
        res.clearCookie(`my-token-${id}`);
        res.status(200).json({ message: "Logout successful" });
      } else {
        res.status(500).json({ message: "Unable to clear cookie" });
      };

   } catch (error) {
      console.error(error);
      res.status(500);
   };
};








