import asyncHandler from "express-async-handler";
import {
  getAllUsers,
  getUserById,
  authUserByEmail,
  createNewUser,
  deleteUser,
} from "../services/user.service.js";

import Token from "../utils/token.js";

/**
 * getUsers
 * @param {*}
 * @return {Array}
 */
export const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json({ data: users, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * get User by id
 * @param {id: String}
 * @return {Object} json
 */
export const getUser = asyncHandler(async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 *  its match the email by findOne method and after that we compare
 * @param {Object} req res
 * @return {String}
 */
export const authUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await authUserByEmail(email);

    if (data && (await data.matchPassword(password))) {
      const token = Token(data.id);
      res.json({ token });
    }
  } catch (error) {
    console.log("error:", error.message);
  }
});

/**
 * create a new user
 * its check
 * @param {id: String, Object}
 * @return {Object} json
 */
export const registerUser = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;
    const data = await authUserByEmail(email);
    if (!data) {
      const user = await createNewUser(req.body);
      const id = user.id;
      const token = Token(id);
      res.json({ token });
    }
    if (data) {
      throw new Error(
        " email already exists please try another email or try with login"
      );
    }
  } catch (error) {
    res.status(409).json({ error: `user already exists ${error.message}` });
  }
});

/**
 * softDelete as change isActive with !
 * @param {id: String, Object}
 * @return {Object} json
 */
export const softDeleteUser = asyncHandler(async (req, res) => {
  try {
    const data = await deleteUser(req.params.id, req.body);
    res.json({ data: data });
  } catch (error) {
    console.log("error", error.message);
  }
});

// export const softDeleteUser = asyncHandler(async (req, res) => {
//   try {
//     const data = await getUserById(req.params.id);

//     if (data) {
//       console.log(data);
//       const { isActive } = req.body;

//       await data.update(isActive);
//       const user = await getUserById(req.params.id);
//       res.json({ data: user });
//     }
//   } catch (error) {
//     console.log("error:", error.message);
//   }
// });
