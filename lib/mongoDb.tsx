import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const DBProcessFile = process.env.MongoDB_URI || "Nothing";
    const db = await mongoose.connect(DBProcessFile);
    console.log("Connected MongoDB ");
  } catch (error) {
    console.log("Error to connecting monogoDB", error);
  }
};
