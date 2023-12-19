import express from "express";
import { getUsers } from "../controllers/users";

const router = express.Router();

router.get('/api', getUsers);

export {router}