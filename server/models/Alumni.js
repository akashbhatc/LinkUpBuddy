import mongoose from "mongoose";

const AlumniSchema = new mongoose.Schema(
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
      min: 7,
    },
    picturePath: {
      type: String,
      default: "",
    },
    companyName: String,
    location: String,
    occupation: String,
    passoutYear: {
        type: Array,
        required:true,
      },
    },
    { timestamps: true }
);

const Alumni = mongoose.model("Alumni", AlumniSchema);
export default Alumni;