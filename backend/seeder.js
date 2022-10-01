import connectDB from "./config/db.js";

import Users_data from "./seeder-data/user.seeder.js";
import Post_data from "./seeder-data/post.seeder.js";

import Users from "./model/userModel.js";
import Post from "./model/postModel.js";
import Comment from "./model/commentModel.js";
import Comment_data from "./seeder-data/comment.seeder.js";

/**
 * importData
 * delete all Old data and Import Fresh Data From seeder-data
 */
const importData = async () => {
  connectDB();
  try {
    //delete old data
    await Users.deleteMany();
    await Post.deleteMany();
    await Comment.deleteMany();

    //import fresh data
    //import users
    const users = await Users.insertMany(Users_data);
    //import Post With CreatedBy key
    const updatedPost = Post_data.map((obj) => ({
      ...obj,
      createdBy: users[0]._id,
    }));

    const posts = await Post.insertMany(updatedPost);
    //import Comments with CreatedBy And  Post_Id
    const updatedComment = await Comment_data.map((obj) => ({
      ...obj,
      createdBy: users[0]._id,
      post_Id: posts[0]._id,
    }));
    await Comment.insertMany(updatedComment);

    console.log("Data Imported successfully");
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  connectDB();
  try {
    //delete data
    await Users.deleteMany();
    await Post.deleteMany();
    await Comment.deleteMany();
    console.log("Data deleted successfully");
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

console.log(process.argv);
if (process.argv[2] === "-D") {
  deleteData();
} else {
  importData();
}
