/**
 * This is a method that return not Found message and status Code 404 and throw error
 * @param {*} err
 * @param {*} next
 */

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
export { notFound };
