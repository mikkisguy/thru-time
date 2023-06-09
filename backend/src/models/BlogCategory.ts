import { getSlug, sequelize } from "../shared/utils";
import { DataTypes, Model, UUIDV4 } from "sequelize";
import BlogPostModel from "./BlogPost";

interface BlogCategoryAttributes {
  id?: number;
  uuid?: string;
  slug?: string;
  title?: string;
}

interface BlogCategoryInstance
  extends Model<BlogCategoryAttributes>,
    BlogCategoryAttributes {}

const BlogCategoryModel = sequelize.define<
  BlogCategoryInstance,
  BlogCategoryAttributes
>(
  "BlogCategory",
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
    slug: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING(70),
      allowNull: false,
      unique: true,
    },
  },
  {
    underscored: true,
    hooks: {
      beforeValidate: (blogCategory: BlogCategoryInstance) => {
        // Update slug
        if (blogCategory.title) {
          blogCategory.slug = getSlug(blogCategory.title);
        }
      },
    },
  }
);

BlogCategoryModel.hasMany(BlogPostModel);
BlogPostModel.belongsTo(BlogCategoryModel);

export default BlogCategoryModel;
