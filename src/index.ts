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


import express from 'express';
import dotenv from 'dotenv';
import { Request, Response } from "express";
import {routerUsers} from './routes/users';



const app = express();

dotenv.config();
app.use(express.json());

const port = process.env.PORT;
 
app.use('/api', routerUsers);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

