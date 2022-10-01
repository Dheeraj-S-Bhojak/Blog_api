import expressAsyncHandler from "express-async-handler";
import {
  getPostById,
  getAllPost,
  deletePostById,
  createPost,
  updatePost,
} from "../services/post.service.js";

/**
 * get all Post
 * @param {*}
 * @return {Array} json
 */
export const getPosts = expressAsyncHandler(async (req, res) => {
  try {
    const posts = await getAllPost();
    res.json({ data: posts, status: "success" });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

/**
 * get Post by id
 * @param {id: String}
 * @return {Object} json
 */
export const getPost = expressAsyncHandler(async (req, res) => {
  try {
    const post = await getPostById(req.params.id);
    res.json({ data: post, status: "success" });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

/**
 *  Delete Post permanently
 * @param {id: String}
 * @return {Object} json
 */
export const removePost = expressAsyncHandler(async (req, res) => {
  try {
    await deletePostById(req.params.id);
    res.json({ data: "Post deleted successfully", status: "success" });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

/**
 * updatePost
 * @param {Object, id: String,}
 * @return {Object} json
 */
export const updatePostById = expressAsyncHandler(async (req, res) => {
  try {
    const post = await updatePost(req.params.id, req.body);
    res.json({ data: post, status: "success" });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

/**
 * makePost
 * @param {Object, id: String, id:String}
 * @return {Object} json
 */
export const makePost = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.id;
    const body = req.body;
    const data = {
      ...body,
      createdBy: id,
    };
    const post = await createPost(data);
    res.json({ data: post, status: "success" });
  } catch (error) {
    console.log("error", error.message);
  }
});
