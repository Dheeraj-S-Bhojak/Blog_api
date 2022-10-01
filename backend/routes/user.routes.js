import express from "express";

import {
  getUsers,
  getUser,
  authUser,
  registerUser,
  softDeleteUser,
} from "../controller/user.controller.js";

/**
 * userRouter
 * This is a method to provide  Routes to User APi.
 */
const userRouter = express.Router();

userRouter.route("/").get(getUsers).post(registerUser);
userRouter.route("/:id").get(getUser).patch(softDeleteUser);
userRouter.route("/login").post(authUser);

export default userRouter;
