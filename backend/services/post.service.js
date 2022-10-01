import Post from "../model/postModel.js";

/**
 * getAllPost
 * @returns {Object}
 */
export const getAllPost = async () => {
  return await Post.find();
};

/**
 * getPostById
 * @returns {Array}
 */
export const getPostById = async (id) => {
  return await Post.findById(id);
};

/**
 * deletePostById
 * @param {String} id
 * @returns {Array}
 */
export const deletePostById = async (id) => {
  return await Post.findByIdAndDelete(id);
};
/**
 * createPost
 * @param { Object} id, comment
 * @returns {Array}
 */
export const createPost = async (post) => {
  return await Post.create(post);
};

/**
 * updatePost
 * @param {*String} id
 * @param {Object} post
 * @returns {Object}
 */
export const updatePost = async (id, post) => {
  return await Post.findByIdAndUpdate(id, post);
};
