// npm install express
// npm install @types/express --save-dev
// npm install sequelize sequelize-typescript mysql2
// npm install @types/sequelize --save-dev
// npm install nodemon --save-dev
// npm install -g ts-node
// npm install sequelize-cli --save-dev
// npx sequelize-cli init
// npm i dotenv
// npm install uuid
// npm i --save-dev @types/uuid
// npm install bcrypt jsonwebtoken
// npm install @types/bcrypt @types/jsonwebtoken --save-dev
// npm install cookie-parser @types/cookie-parser --save



import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth-user";
import { routerUsers } from "./routes/users";
import { tokenAuthMiddleware } from "./middlewares";

 

const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());


const port = process.env.PORT;

app.use("/api", authRouter);
 
app.use("/api", routerUsers);
 
app.get("/", tokenAuthMiddleware, (req: Request, res: Response) => {
  res.send("Hello World!");
}); 

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

