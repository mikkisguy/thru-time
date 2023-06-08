import { sequelize } from "../shared/utils";
import { DataTypes, Model, UUIDV4 } from "sequelize";

export interface LanguageAttributes {
  id?: number;
  uuid?: string;
  language?: string;
}

interface LanguageInstance
  extends Model<LanguageAttributes>,
    LanguageAttributes {}

export const LanguageModel = sequelize.define<
  LanguageInstance,
  LanguageAttributes
>(
  "Language",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      defaultValue: UUIDV4,
    },
    language: {
      type: DataTypes.STRING(2),
      allowNull: false,
      unique: true,
    },
  },
  {
    underscored: true,
  }
);
