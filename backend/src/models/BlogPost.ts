import { BLOG_POST_STATUS } from "../shared/constants";
import { sequelize } from "../shared/utils";
import { DataTypes, Model, UUIDV4 } from "sequelize";

interface BlogPostAttributes {
  id?: number;
  uuid?: string;
  status?: Enumerator;
  slug?: string;
  title?: string;
  summary?: string;
  content?: string;
  passwordHash?: string;
  publishedAt?: string;
}

interface BlogPostInstance
  extends Model<BlogPostAttributes>,
    BlogPostAttributes {}

const BlogPostModel = sequelize.define<BlogPostInstance, BlogPostAttributes>(
  "BlogPost",
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
    status: {
      type: DataTypes.ENUM(
        BLOG_POST_STATUS.DRAFT,
        BLOG_POST_STATUS.PRIVATE,
        BLOG_POST_STATUS.PUBLISHED,
        BLOG_POST_STATUS.PROTECTED
      ),
      allowNull: false,
      defaultValue: BLOG_POST_STATUS.DRAFT,
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
    summary: {
      type: DataTypes.STRING(255),
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING(60),
    },
    publishedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    underscored: true,
    hooks: {
      beforeValidate: (blogPost: BlogPostInstance) => {
        // Update slug
        if (blogPost.title) {
          blogPost.slug = blogPost.title.toLowerCase();
        }
      },
    },
  }
);

export default BlogPostModel;
