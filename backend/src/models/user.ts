import { sequelize } from "../shared/utils";
import { DataTypes, Model } from "sequelize";

interface UserAttributes {
  id: number;
  uuid: string;
  email: string;
  username: string;
  slug: string;
  passwordHash: string;
  displayName: string;
  avatarUrl: string;
  bio: string;
}

interface UserInstance extends Model<UserAttributes>, UserAttributes {}

export const UserModel = sequelize.define<UserInstance, UserAttributes>(
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
      unique: true,
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true,
    },
    slug: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true,
    },
    passwordHash: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    displayName: {
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
    hooks: {
      beforeValidate: (user: UserInstance) => {
        // Update slug
        if (user.username) {
          user.slug = user.username.toLowerCase();
        }
      },
    },
  }
);
