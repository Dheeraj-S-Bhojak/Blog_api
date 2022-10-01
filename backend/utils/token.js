import jwt from "jsonwebtoken";
import dotenv from "dotenv";

/**
 *
 * Token
 * it's generates token
 * @param { Strings} id
 * @returns jwt sign Token
 */
const Token = (id) => {
  dotenv.config();
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

export default Token;
