import express from "express";
import { addUser, getUsers, updateUser } from "../controllers/users";

const router = express.Router();

router.get("/users", getUsers);

router.post("/users", addUser);

router.put("/users/:id", updateUser);

export {router}