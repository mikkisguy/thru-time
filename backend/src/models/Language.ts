import { sequelize } from "../shared/utils";
import { DataTypes, Model, UUIDV4 } from "sequelize";
import BlogCategoryModel from "./BlogCategory";
import BlogPostModel from "./BlogPost";
import BlogTagModel from "./BlogTag";
import { LANGUAGE } from "../shared/constants";

interface LanguageAttributes {
  id?: number;
  uuid?: string;
  language?: string;
}

interface LanguageInstance
  extends Model<LanguageAttributes>,
    LanguageAttributes {}

const LanguageModel = sequelize.define<LanguageInstance, LanguageAttributes>(
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
      type: DataTypes.ENUM(LANGUAGE.FI, LANGUAGE.EN),
      allowNull: false,
      unique: true,
      defaultValue: LANGUAGE.FI,
    },
  },
  {
    underscored: true,
  }
);

LanguageModel.hasMany(BlogCategoryModel);
BlogCategoryModel.belongsTo(LanguageModel);
LanguageModel.hasMany(BlogTagModel);
BlogTagModel.belongsTo(LanguageModel);
LanguageModel.hasMany(BlogPostModel);
BlogPostModel.belongsTo(LanguageModel);
// User bio translation?

export default LanguageModel;
