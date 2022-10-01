import mongoose from "mongoose";

/**
 * CommentSchema
 * This is a Schema method which gives a standard and validation to store comments in the mongoose DataBase
 */
const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      minLength: [1, "comment content minimum length should be 1"],
      maxLength: [400, "comment content maximum length 400 "],
      required: [true, "comment content is required "],
      trim: true,
    },

    post_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    updateBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false }, versionKey: false }
);

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;
