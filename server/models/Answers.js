import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
    queryId: String,
    alumniId: String,
    answerText: String, // Add a field to store the answer text
}, { timestamps: true });

const Answers = mongoose.model("Answers", AnswerSchema);
export default Answers;
