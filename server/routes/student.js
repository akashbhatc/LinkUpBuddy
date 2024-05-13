import express from "express";
import {
  getStudent,
  getCompany,
  getStudentBookmarks,
  getStudentQueries,
  removeStudent,
  removeBookmarks,
  removeStudentQueries,
} from "../controllers/student.js";


const router = express.Router();

router.get("/check", (req, res) => {
  res.status(200).json({ "status": "Okay" });
});

/* READ */
// Endpoint to get student details by ID
router.get("/:id", getStudent);

// Endpoint to get company details by ID
router.get("/:companyId", getCompany);

// Endpoint to get student's queries
router.get("/:id/queries", getStudentQueries);

// Endpoint to get student's bookmarks
router.get("/:id/bookmarks", getStudentBookmarks);

/* UPDATE */
// Endpoint to add or remove a student
router.delete("/:id/remove", removeStudent);

// Endpoint to add or remove a bookmark for a student
router.patch("/:id/:companyId/bookmarks", removeBookmarks);

// Endpoint to add or remove queries for a student
router.patch("/:id/:queryId/remove", removeStudentQueries);

export default router;
