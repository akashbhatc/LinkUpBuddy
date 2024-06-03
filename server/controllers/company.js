import Query from "../models/Queries.js";
import Student from "../models/Student.js";
import Company from "../models/Company.js"; // Import Company model

/* CREATE */

/* READ */
export const getFeedQueries = async (req, res) => {
    try {
        const queries = await Query.find();
        res.status(200).json(queries);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

