import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema(
  {
      companyId: String,
      studentId: String, 
      answers: {
        type: Array,
        default: [],
      },
    },
    { timestamps: true }
);

const Query = mongoose.model("Query", QuerySchema);
export default Query;
