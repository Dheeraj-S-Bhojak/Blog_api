import Comment from "../model/commentModel.js";

/**
 * getAllComments
 * @returns {Object}
 */
export const getAllComments = async () => {
  return await Comment.find();
};

/**
 * getCommentById
 * @returns {Array}
 */
export const getCommentById = async (id) => {
  return await Comment.findById(id);
};

/**
 * permanentDeleteComment
 * @param {String} id
 * @returns {Array}
 */
export const permanentDeleteComment = async (id) => {
  return await Comment.findByIdAndDelete(id);
};

/**
 * hideCommentById
 * @param {String, Object} id, comment
 * @returns {Array}
 */
export const hideCommentById = async (id, comment) => {
  return await Comment.findByIdAndUpdate(id, comment);
};

/**
 * createComment
 * @param { Object} id, comment
 * @returns {Array}
 */
export const createComment = async (comment) => {
  return await Comment.create(comment);
};
