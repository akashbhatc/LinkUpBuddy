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
export const addRemoveBookmark = async (req, res) => {
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