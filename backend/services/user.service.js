import Users from "../model/userModel.js";

/**
 * getAllUsers
 * @returns {Object}
 */
export const getAllUsers = async () => {
  return await Users.find();
};

/**
 * getUserById
 * @returns {Array}
 */
export const getUserById = async (id) => {
  return await Users.findById(id);
};

/**
 * authUserByEmail
 *
 * @param {String} email
 * @returns {Object}
 */
export const authUserByEmail = async (email) => {
  return await Users.findOne({ email });
};

/**
 * createNewUser
 * @param { Object} user
 * @returns {Object}
 */
export const createNewUser = async (user) => {
  return await Users.create(user);
};

/**
 * deleteUser
 * @param {String} id
 * @param {object} user
 * @returns {Object}
 */
export const deleteUser = async (id, user) => {
  return await Users.findByIdAndUpdate(id, user);
};
