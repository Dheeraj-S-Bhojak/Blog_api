import express from "express";

import {
  getComments,
  getComment,
  removeComment,
  softDeleteComment,
  makeComment,
} from "../controller/comment.controller.js";
import Protect from "../middleware/authMiddle.js";

/**
 * CommentRouter
 * This method to provide Comment APi Routes
 */
const commentRouter = express.Router();

commentRouter.route("/").get(getComments);
commentRouter
  .route("/:id")
  .get(getComment)
  .delete(removeComment)
  .patch(softDeleteComment)
  .post(Protect, makeComment);

export default commentRouter;
