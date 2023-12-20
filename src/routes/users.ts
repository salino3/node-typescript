import express from "express";
import { addUser, deleteUser, getOne, getUsers, updateUser } from "../controllers/users";

const routerUsers = express.Router();

routerUsers.get("/users", getUsers);

routerUsers.post("/users", addUser);

routerUsers.get("/users/:id", getOne);

routerUsers.put("/users/:id", updateUser);

routerUsers.delete("/users/:id", deleteUser);

export {routerUsers} 