import express from "express";

import {
  getPosts,
  getPost,
  removePost,
  makePost,
  updatePostById,
} from "../controller/post.controller.js";
import Protect from "../middleware/authMiddle.js";

/**
 * postRouter
 * This is a method to provide  Routes to post APi.
 */
const postRouter = express.Router();

postRouter.route("/").get(getPosts).post(Protect, makePost);
postRouter.route("/:id").get(getPost).delete(removePost).put(updatePostById);

export default postRouter;
