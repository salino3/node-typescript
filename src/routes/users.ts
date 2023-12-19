import express from "express";
import { addUser, getUsers } from "../controllers/users";

const router = express.Router();

router.get("/users", getUsers);

router.post("/users", addUser);

export {router}