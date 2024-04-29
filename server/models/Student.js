import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    passoutYear: {
      type: Array,
    },
    location: String,
    occupation: String,
    queriesPostedanswered: Number,
    queriesPostedunanswered: Number,
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);
export default Student;