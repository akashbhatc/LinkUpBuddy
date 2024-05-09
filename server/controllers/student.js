import Student from "../models/Student.js";
import Company from "../models/Company.js";

/* READ */
export const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.status(200).json(student);
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
export const getStudentQueries = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);

    const answers = await Promise.all(
      student.queries.map((id) => Queries.findById(id))
    );
    const formattedQueries = answers.map(
      ({ _id, companyName, answers }) => {
        return { _id, companyName, answers };
      }
    );
    res.status(200).json(formattedQueries);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const getStudentBookmarks = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);

    const bookmarks = await Promise.all(
      student.bookmarks.map((id) => Company.findById(id))
    );
    const formattedBookmarks = bookmarks.map(
      ({ _id, companyName, location, picturePath }) => {
        return { _id, companyName, location, picturePath };
      }
    );
    res.status(200).json(formattedBookmarks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const addRemoveBookmarks = async (req, res) => {
  try {
    const { id,bookmarkId } = req.params;
    const student = await Student.findById(id);
    const bookmark = await Student.findById(bookmarkId);

    if (student.bookmarks.includes(bookmarkId)) {
      student.bookmarks = student.bookmarks.filter((id) => id !== bookmarkId);
      bookmark.bookmarks = bookmark.bookmarks.filter((id) => id !== id);
    } else {
      student.bookmarks.push(bookmarkId);
      bookmark.bookmarks.push(id);
    }
    await student.save();
    await bookmark.save();

    const bookmarks = await Promise.all(
      student.bookmarks.map((id) => Company.findById(id))
    );
    const formattedBookmarks = bookmarks.map(
      ({ _id, companyName, location, picturePath }) => {
        return { _id, companyName, location, picturePath };
      }
    );

    res.status(200).json(formattedBookmarks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

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
