import mongoose from "mongoose";
import bcrypt from "bcrypt";

/**
 * userSchema
 * This is a Schema method which gives a standard and validation to store Users in the mongoose DataBase
 */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, "name minimum length should be 3"],
      maxLength: [32, "name maximum length should not exceed 30"],
      required: true,
    },

    email: {
      type: String,
      format: "email",
      required: true,
    },
    password: {
      type: String,
      required: true,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    roles: {
      type: [String],
      enum: ["Reviewer", "Author"],
    },
    bio: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false }, versionKey: false }
);
userSchema.methods.matchPassword = async function (formPassword) {
  return await bcrypt.compare(formPassword, this.password);
};

const Users = mongoose.model("Users", userSchema);
export default Users;
