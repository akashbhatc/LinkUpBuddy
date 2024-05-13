// Import required models
import Query from "../models/Queries.js";

/* CREATE */
export const createQueries = async (req, res) => {
    try {
        const { companyId, studentId, answers } = req.body;
        const newQuery = new Query({ companyId, studentId, answers });
        await newQuery.save();
        res.status(201).json(newQuery);
    } catch (err) {
        res.status(409).json({ message: err.message });
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
