import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import { notFound } from "./middleware/notFound.middleware.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import commentRouter from "./routes/comment.route.js";

const server = express();
dotenv.config();
const PORT = process.env.PORT;

server.use(express.json());
server.use("/api/user", userRouter);
server.use("/api/post", postRouter);
server.use("/api/comment", commentRouter);

server.use(notFound);
server.use(errorHandler);

try {
  connectDB();
  server.listen(PORT, () => {
    console.log(`Server is running on port:- ${PORT}`);
  });
} catch (error) {
  console.log(`Error: ${error.message}`);
}

export default server;
