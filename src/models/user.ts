// models/UserModel.ts

import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection";

// Definición de ENUM para el género
type GenderType = "female" | "male" | "other" | "prefer not to say";

class UserModel extends Model {
  public id!: number;
  public name!: string;
  public surname!: string;
  public email!: string;
  public password!: string;
  public age!: number;
  public job!: string;
  public isAdult!: boolean;
  public gender!: GenderType;
  public createdAt!: Date;
  public updatedAt!: Date;
}

UserModel.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    job: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdult: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM<GenderType>(
        "female",
        "male",
        "other",
        "prefer not to say"
      ),
      allowNull: true,
      defaultValue: "prefer not to say",
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);

export default UserModel;
