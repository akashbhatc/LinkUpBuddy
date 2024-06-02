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
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found." });
        }
        
        // Remove student
        await Student.deleteOne({ _id: req.params.id });
        return res.status(200).json({ message: "Student removed successfully." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
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
};export const addCompany = async (req, res) => {
    try {
      const { companyName, picturePath,location } = req.body;
      const  newCompany = new Company( { 
        companyName : companyName, 
        picturePath : picturePath,
        location : location,
     }); 
     const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }    
  };
  
export const removeCompany = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) {
            return res.status(404).json({ message: "Company not found." });
        }
        
        // Remove student
        await Company.deleteOne({ _id: req.params.id });
        return res.status(200).json({ message: "Company removed successfully." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const removeAnswers = async (req, res) => {
    try {
        const answer = await Answers.findById(req.params.id);
        if (!answer) {
            return res.status(404).json({ message: "Answer not found." });
        }
        
        // Remove student
        await Answer.deleteOne({ _id: req.params.id });
        return res.status(200).json({ message: "Answer removed successfully." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const removeQueries = async (req, res) => {
    try {
       
        const queries = await Query.findById(req.params.id);
        if (!queries) {
            return res.status(404).json({ message: "Query not found." });
        }
        
        // Remove student
        await Query.deleteOne({ _id: req.params.id });
        
        return res.status(200).json({ message: "Query removed successfully." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
