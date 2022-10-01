import mongoose from "mongoose";
import dotenv from "dotenv";

/**
 *  connectDB method
 *  it make sure your connection was successful connect with data base
 */
const connectDB = async () => {
  try {
    dotenv.config();
    mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
    });
    console.log("Connected to the Server");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};
export default connectDB;
