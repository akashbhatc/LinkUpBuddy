import Query from "../models/Queries.js";
import Student from "../models/Student.js";
import Company from "../models/Company.js"; // Import Company model

/* CREATE */
export const createQueries = async (req, res) => {
    try {
        const { companyId, studId, description } = req.body; // Assuming description and picturePath are received in the request body
        const company = await Company.findById(companyId);
        const student = await Student.findById(studId);

        if (!company || !student) {
            return res.status(404).json({ message: "Company or Student not found." });
        }

        const newQuery = new Query({
            companyId: company._id, // Assign company's ObjectId to the query
            studentId: student._id, // Assign student's ObjectId to the query
            description,
        });

        await newQuery.save();

        // Push the new query's ObjectId to the company's queries array
        company.queries.push(newQuery._id);
        await company.save();

        res.status(201).json({ message: "Query created successfully." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/* READ */
export const getFeedQueries = async (req, res) => {
    try {
        const queries = await Query.find();
        res.status(200).json(queries);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getUserQueries = async (req, res) => {
    try {
        const { userId } = req.params;
        const queries = await Query.find({ studentId: userId });
        res.status(200).json(queries);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
