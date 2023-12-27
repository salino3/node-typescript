import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

if (!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_DATABASE) {
  throw new Error(
    "Environment variables are missing for the database connection."
  );
}

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  port: Number(DB_PORT),
});


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the database established correctly.");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

export default sequelize;
