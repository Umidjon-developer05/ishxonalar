import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: false },
  password: { type: String, required: false },
});

export default mongoose.models.Login || mongoose.model("Login", LoginSchema);
