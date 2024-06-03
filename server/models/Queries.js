import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema({
    companyId: String,
    studentId: String,
    queryText: {
       type : String,
        required : true
    },
    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answers',
    }],
}, { timestamps: true });

const Queries = mongoose.model("Query", QuerySchema);
export default Queries;
