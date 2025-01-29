import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  cod: { type: Number, required: false },
  title: { type: String, required: false },
  description: { type: String, required: false },
  requirements: { type: [String], required: false },
  salary: { type: String, required: false },
  experienceLevel: { type: String, required: false },
  location: { type: String, required: false },
  jobType: { type: String, required: false },
  position: { type: String, required: false },
  company: {
    type: {
      name: { type: String, required: false },
      website: { type: String, required: false },
      industry: { type: String, required: false },
    },
    required: false,
  },
});

export default mongoose.models.JobAll || mongoose.model("JobAll", JobSchema);
