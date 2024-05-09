import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema(
  {
      companyId: String,
      studentId: String, 
    },
    { timestamps: true }
);

const Answers = mongoose.model("Answers", AnswerSchema);
export default Answers;
