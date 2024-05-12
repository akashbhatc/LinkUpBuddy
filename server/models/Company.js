import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    picturePath: {
        type: String,
        default: "",
    },
    location: String,
    queriesAnswered: {
        type: Number,
    },
    queries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Queries',
    }],
}, { timestamps: true });

const Company = mongoose.model("Company", CompanySchema);
export default Company;
