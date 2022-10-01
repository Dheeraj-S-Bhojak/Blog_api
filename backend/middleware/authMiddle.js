import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

/**
 * Protect
 * It's remove headers and getToken, get id
 * @param {Object}
 * @return {Object} req.id
 */
const Protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const id = decodedToken.id;

      req.id = {
        id,
      };
      next();
    } catch (error) {
      res.status(401);
      throw new Error("not authorized , token failed");
    }
  }
});
export default Protect;
