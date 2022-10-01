import expressAsyncHandler from "express-async-handler";

import {
  getAllComments,
  getCommentById,
  permanentDeleteComment,
  hideCommentById,
  createComment,
} from "../services/comment.service.js";

/**
 * get all comments
 * @param {*}
 * @return {Array} json
 */
export const getComments = expressAsyncHandler(async (req, res) => {
  try {
    const comments = await getAllComments();
    res.json({ data: comments, status: "success" });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

/**
 * get comments by id
 * @param {id: String}
 * @return {Object} json
 */
export const getComment = expressAsyncHandler(async (req, res) => {
  try {
    const comment = await getCommentById(req.params.id);
    res.json({ data: comment, status: "success" });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

/**
 *  Delete comment permanently
 * @param { String} req.params.id
 * @return {Object} res.json
 */
export const removeComment = expressAsyncHandler(async (req, res) => {
  try {
    await permanentDeleteComment(req.params.id);
    res.json({
      data: "Comment Permanent deleted",
      status: "success",
    });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

/**
 * softDelete as change isActive with !
 * @param {String, Object}
 * @return {Object} json
 */
export const softDeleteComment = expressAsyncHandler(async (req, res) => {
  try {
    const data = await hideCommentById(req.params.id, req.body);
    res.json({ data: data });
  } catch (error) {
    console.log("error", error.message);
  }
});

/**
 * create a Comment
 * @param {Object, id: String, id:String}
 * @return {Object} json
 */
export const makeComment = expressAsyncHandler(async (req, res) => {
  try {
    const postId = req.params.id;
    const { id } = req.id;
    const body = req.body;
    const data = {
      ...body,
      createdBy: id,
      post_Id: postId,
    };
    const comment = await createComment(data);
    res.json({ data: comment, status: "success" });
  } catch (error) {
    console.log("error", error.message);
  }
});
