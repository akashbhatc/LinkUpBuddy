import Company from "../models/Company.js"
import Alumni from "../models/Alumni.js";

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

      export const addRemoveAlumniAnswers = async (req, res) => {
        try {
          const { answerId } = req.params;
          const { action } = req.body; // Assuming you receive an action (add/remove) in the request body
          const answer = await Answers.findById(answerId);
      
          if (!answer) {
            return res.status(404).json({ message: "Answer not found." });
          }
      
          if (action === "add") {
            // Add answers
            if (!answer.answers.includes(answerId)) {
              answer.answers.push(answerId);
            }
          } else if (action === "remove") {
            // Remove answers
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
      
 






