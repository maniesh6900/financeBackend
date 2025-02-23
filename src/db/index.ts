import mongoose from "mongoose";

export const connectmongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("Connected to MongoDB.");
  } catch (error) {
    throw error;
  }
};
