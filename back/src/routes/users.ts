import express from "express";
import { addUser, deleteUser, deleteUserByAdmin, getOne, getUsers, updateUser, updateUserPassword } from "../controllers/users";
import { verifyAdmin, verifyToken } from "../middlewares";

const routerUsers = express.Router();

routerUsers.get("/users", getUsers);

routerUsers.post("/users", addUser);

routerUsers.get("/users/:id", verifyToken, getOne);

routerUsers.put("/users/:id", verifyToken, updateUser);

routerUsers.patch("/users/:id", verifyToken, updateUserPassword);

routerUsers.delete("/users/:id", verifyToken, deleteUser);

routerUsers.delete("/users/admin/:id/:idAdmin", verifyToken, verifyAdmin, deleteUserByAdmin);

export {routerUsers}; 