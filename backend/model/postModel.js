import mongoose from "mongoose";
import { convertToSlug } from "../config/slug.js";

/**
 * postSchema
 * This is a Schema method which gives a standard and validation to store Post in the mongoose DataBase
 */
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minLength: [4, "post title minimum length should be 4"],
      maxLength: [120, "post title maximum length 120 "],
      required: [true, "post title is required "],
      trim: true,
    },
    content: {
      type: String,
      maxLength: [3000, "post content maximum length 3000"],
      minLength: [4, "post title minimum length should be 4"],
      required: [true, "post title is required "],
      trim: true,
    },
    imageUrl: [
      {
        type: String,
        required: [true, "image Is required"],
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    slug: {
      type: String,
      minLength: [4, "post title minimum length should be 4"],
      maxLength: [120, "post title maximum length 120 "],
      trim: true,
    },
    status: {
      type: [String],
      enum: ["DRAFT", "PUBLISH"],
    },
  },
  { timestamps: { createdAt: true, updatedAt: false }, versionKey: false }
);

/**
 * This is the middleware, It will be called before saving any record
 * it change into Slug
 */
postSchema.pre("save", async function (next) {
  this.slug = convertToSlug(this.title);
  next();
});

const Post = mongoose.model("Posts", postSchema);
export default Post;
