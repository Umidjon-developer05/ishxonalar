import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const uri =
      "mongodb+srv://umidjon:Umidjon2005@cluster0.dejp0.mongodb.net/ish-uz";
    await mongoose.connect(uri);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
