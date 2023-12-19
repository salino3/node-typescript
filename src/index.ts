// npm install express
// npm install @types/express --save-dev
// npm install sequelize sequelize-typescript mysql2
// npm install @types/sequelize --save-dev
// npm install nodemon --save-dev
// npm install -g ts-node
// npm install sequelize-cli --save-dev
// npx sequelize-cli init
// npm i dotenv

import express from 'express';
import dotenv from 'dotenv';
import { Request, Response } from "express";
import sequelize from './db/connection';




const app = express();

dotenv.config();

const port = process.env.PORT;
 


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

console.log(sequelize)