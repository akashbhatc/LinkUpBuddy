// Import required models
import Student from "../models/Student.js";
import Company from "../models/Company.js";
import Admin from "../models/Admin.js";
import Alumni from "../models/Alumni.js";
import Answers from "../models/Answers.js";
import Query from "../models/Queries.js";

/* READ */
export const getAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findById(id);
        res.status(200).json(admin);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getAlumni = async (req, res) => {
    try {
        const { id } = req.params;
        const alumni = await Alumni.findById(id);
        res.status(200).json(alumni);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getStudentQueries = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id).populate('queries');
        res.status(200).json(student.queries);
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
export const removeStudent = async (req, res) => {
    try {
        const { studId } = req.params;
        const student = await Student.findById(studId);
        if (!student) {
            return res.status(404).json({ message: "Student not found." });
        }

        const { action } = req.body;
        if (action === "add") {
            // Add student
            if (!student.students.includes(studId)) {
                student.students.push(studId);
            }
        } else if (action === "remove") {
            // Remove student
            student.students = student.students.filter(id => id !== studId);
        } else {
            return res.status(400).json({ message: "Invalid action." });
        }

        await student.save();
        res.status(200).json(student.students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const removeAlumni = async (req, res) => {
    try {
        const { alumId } = req.params;
        const alumni = await Alumni.findById(alumId);
        if (!alumni) {
            return res.status(404).json({ message: "Alumni not found." });
        }

        const { action } = req.body;
        if (action === "add") {
            // Add alumni
            if (!alumni.includes(alumId)) {
                alumni.push(alumId);
            }
        } else if (action === "remove") {
            // Remove alumni
            alumni = alumni.filter(id => id !== alumId);
        } else {
            return res.status(400).json({ message: "Invalid action." });
        }

        await alumni.save();
        res.status(200).json(alumni.alums);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const removeCompany = async (req, res) => {
    try {
        const { compId } = req.params;
        const company = await Company.findById(compId);
        if (!company) {
            return res.status(404).json({ message: "Company not found." });
        }

        const { action } = req.body;
        if (action === "add") {
            // Add company
            if (!company.includes(compId)) {
                company.push(compId);
            }
        } else if (action === "remove") {
            // Remove company
            company = company.filter(id => id !== compId);
        } else {
            return res.status(400).json({ message: "Invalid action." });
        }

        await company.save();
        res.status(200).json(company.companies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const removeAnswers = async (req, res) => {
    try {
        const { answerId } = req.params;
        const answer = await Answers.findById(answerId);
        if (!answer) {
            return res.status(404).json({ message: "Answer not found." });
        }

        const { action } = req.body;
        if (action === "add") {
            // Add answer
            if (!answer.includes(answerId)) {
                answer.push(answerId);
            }
        } else if (action === "remove") {
            // Remove answer
            answer = answer.filter(id => id !== answerId);
        } else {
            return res.status(400).json({ message: "Invalid action." });
        }

        await answer.save();
        res.status(200).json(answer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const removeQueries = async (req, res) => {
    try {
        const { queryId } = req.params;
        const query = await Query.findById(queryId);
        if (!query) {
            return res.status(404).json({ message: "Query not found." });
        }

        const { action } = req.body;
        if (action === "add") {
            // Add query
            if (!query.includes(queryId)) {
                query.push(queryId);
            }
        } else if (action === "remove") {
            // Remove query
            query = query.filter(id => id !== queryId);
        } else {
            return res.status(400).json({ message: "Invalid action." });
        }

        await query.save();
        res.status(200).json(query);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
