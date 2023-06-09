import { getSlug, sequelize } from "../shared/utils";
import { DataTypes, Model, UUIDV4 } from "sequelize";
import BlogPostModel from "./BlogPost";

interface BlogTagAttributes {
  id?: number;
  uuid?: string;
  slug?: string;
  title?: string;
}

interface BlogTagInstance extends Model<BlogTagAttributes>, BlogTagAttributes {}

const BlogTagModel = sequelize.define<BlogTagInstance, BlogTagAttributes>(
  "BlogTag",
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
      beforeValidate: (blogTag: BlogTagInstance) => {
        // Update slug
        if (blogTag.title) {
          blogTag.slug = getSlug(blogTag.title);
        }
      },
    },
  }
);

BlogTagModel.belongsToMany(BlogPostModel, { through: "blog_post_tags" });
BlogPostModel.belongsToMany(BlogTagModel, { through: "blog_post_tags" });

export default BlogTagModel;
