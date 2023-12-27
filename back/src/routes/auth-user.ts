import express from'express';
import { userLogin, userLogout } from '../controllers/auth-user';


const authRouter = express.Router();

authRouter.post("/login", userLogin);

authRouter.post("/logout", userLogout);

export { authRouter };