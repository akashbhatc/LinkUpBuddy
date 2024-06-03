import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
    queryId: String,
    alumniId: String,
    answerText:{
    type : String,
    required : true,
    }
}, { timestamps: true });

const Answers = mongoose.model("Answers", AnswerSchema);
export default Answers;
