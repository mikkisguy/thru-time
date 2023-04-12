import { sequelize } from "../shared/utils";
import { DataTypes } from "sequelize";

export const UserModel = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
    },
    avatarUrl: {
      type: DataTypes.STRING(200),
    },
    bio: {
      type: DataTypes.STRING(500),
    },
  },
  {
    underscored: true,
  }
);
