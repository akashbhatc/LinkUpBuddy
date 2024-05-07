import Student from "../models/Student.js";
import Company from "../models/Company.js";
import Admin from "../models/Admin.js";
// import Student from "../models/Student.js";
import Alumni from "../models/Alumni.js";

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

export const getStudentQueries = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);

    const queries = await Promise.all(
      student.queries.map((id) => Queries.findById(id))
    );
    const formattedStudents = queries.map(
      ({ _id, companyName, answers  }) => {
        return { _id, companyName, answers };
      }
    );
    res.status(200).json(formattedStudents);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const addRemoveStudent = async (req, res) => {
    try {
      const { studId } = req.params;
      const { action } = req.body; // Assuming you receive an action (add/remove) in the request body
      const student = await Student.findById(studId);
  
      if (!student) {
        return res.status(404).json({ message: "Student not found." });
      }
  
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
  
      // Respond with updated list of students
      res.status(200).json(student.students);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  export const addRemoveAlumni = async (req, res) => {
    try {
      const { alumId } = req.params;
      const { action } = req.body; // Assuming you receive an action (add/remove) in the request body
      const alumni = await Alumni.findById(alumId);
  
      if (!alumni) {
        return res.status(404).json({ message: "Alumni not found." });
      }
  
      if (action === "add") {
        // Add alumni
        if (!alumni.alums.includes(alumId)) {
          alumni.alums.push(alumId);
        }
      } else if (action === "remove") {
        // Remove alumni
        alumni.alums = alumni.alums.filter(id => id !== alumId);
      } else {
        return res.status(400).json({ message: "Invalid action." });
      }
  
      await alumni.save();
  
      // Respond with updated list of students
      res.status(200).json(alumni.alums);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  export const addRemoveCompany = async (req, res) => {
    try {
      const { compId } = req.params;
      const { action } = req.body; // Assuming you receive an action (add/remove) in the request body
      const company = await Company.findById(compId);
  
      if (!company) {
        return res.status(404).json({ message: "Company not found." });
      }
  
      if (action === "add") {
        // Add student
        if (!company.companies.includes(compId)) {
          company.companies.push(compId);
        }
      } else if (action === "remove") {
        // Remove student
        company.companies = company.companies.filter(id => id !== compId);
      } else {
        return res.status(400).json({ message: "Invalid action." });
      }
  
      await company.save();
  
      // Respond with updated list of companies
      res.status(200).json(company.companies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
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

export const getAlumniAnswers = async (req, res) => {
  try {
    const { id } = req.params;
    const alumni = await Alumni.findById(id);

    const answers = await Promise.all(
      alumni.answers.map((id) => Answer.findById(id))
    );
    const formattedAnswers = answers.map(
      ({ _id, companyName }) => {
        return { _id, companyName };
      }
    );
    res.status(200).json(formattedAnswers);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */

      export const addRemoveAnswers = async (req, res) => {
        try {
          const { answerId } = req.params;
          const { action } = req.body; // Assuming you receive an action (add/remove) in the request body
          const answer = await Answers.findById(answerId);
      
          if (!answer) {
            return res.status(404).json({ message: "Answer not found." });
          }
      
          if (action === "add") {
            // Add alumni
            if (!answer.answers.includes(answerId)) {
              answer.answers.push(answerId);
            }
          } else if (action === "remove") {
            // Remove alumni
            answer.answers = answer.answers.filter(id => id !== answerId);
          } else {
            return res.status(400).json({ message: "Invalid action." });
          }
      
          await answer.save();
      
          // Respond with updated list of answers
          res.status(200).json(answer.answers);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      };
      export const addRemoveQueries = async (req, res) => {
        try {
          const { queryId } = req.params;
          const { action } = req.body; // Assuming you receive an action (add/remove) in the request body
          const query = await Queries.findById(queryId);
      
          if (!query) {
            return res.status(404).json({ message: "Query not found." });
          }
      
          if (action === "add") {
            // Add alumni
            if (!answer.answers.includes(queryId)) {
              query.queries.push(queryId);
            }
          } else if (action === "remove") {
            // Remove alumni
            query.queries = query.queries.filter(id => id !== queryId);
          } else {
            return res.status(400).json({ message: "Invalid action." });
          }
      
          await query.save();
      
          // Respond with updated list of answers
          res.status(200).json(query.queries);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      };  