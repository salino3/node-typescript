
import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection";
import { v4 as uuidv4 } from "uuid";

type GenderType = "female" | "male" | "other" | "prefer not to say";

class UserModel extends Model {
  public id!: string;
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
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(), 
    },
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
