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
    bookmarks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company', // Reference to the Company model
      }
    ],
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
    location: String,
    passoutYear: {
      type: Number,
      required: true,
    },
    queries: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Queries',
  }],
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);
export default Student;
