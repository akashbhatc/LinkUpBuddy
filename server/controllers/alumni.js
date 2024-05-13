// Import required models
import Company from "../models/Company.js";
import Alumni from "../models/Alumni.js";
import Answers from "../models/Answers.js";

/* READ */
export const getAlumni = async (req, res) => {
    try {
        const { id } = req.params;
        const alumni = await Alumni.findById(id);
        res.status(200).json(alumni);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getCompany = async (req, res) => {
    try {
        const { id } = req.params;
        const company = await Company.findById(id);
        res.status(200).json(company);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getAlumniAnswers = async (req, res) => {
    try {
        const { id } = req.params;
        const alumni = await Alumni.findById(id).populate('answers');
        res.status(200).json(alumni.answers);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

/* UPDATE */
export const removeAlumni = async (req, res) => {
    try {
        const alumni = await Alumni.findById(req.params.id);
        if (!alumni) {
            return res.status(404).json({ message: "Alumni not found." });
        }
        
        // Remove student
        await Alumni.deleteOne({ _id: req.params.id });
        return res.status(200).json({ message: "Alumni removed successfully." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const removeAlumniAnswers = async (req, res) => {
    try {
        const answers = await Answers.findById(req.params.id);
        if (!answers) {
            return res.status(404).json({ message: "Answer not found." });
        }
        
        // Remove student
        await Answers.deleteOne({ _id: req.params.id });
        return res.status(200).json({ message: "Answer removed successfully." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
