import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri =
      "mongodb+srv://umidjon:Umidjon2005@cluster0.dejp0.mongodb.net/ish-uz";
    return mongoose.connect(uri);
  }
}
