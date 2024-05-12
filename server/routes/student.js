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
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/check", (req, res) => {
  res.status(200).json({ "status": "Okay" });
});

/* READ */
// Endpoint to get student details by ID
router.get("/:id", verifyToken, getStudent);

// Endpoint to get company details by ID
router.get("/:id/:companyId", verifyToken, getCompany);

// Endpoint to get student's queries
router.get("/:id/queries", verifyToken, getStudentQueries);

// Endpoint to get student's bookmarks
router.get("/:id/bookmarks", verifyToken, getStudentBookmarks);

/* UPDATE */
// Endpoint to add or remove a student
router.patch("/:id/remove", verifyToken, removeStudent);

// Endpoint to add or remove a bookmark for a student
router.patch("/:id/:companyId/bookmarks", verifyToken, removeBookmarks);

// Endpoint to add or remove queries for a student
router.patch("/:id/:queryId/remove", verifyToken, removeStudentQueries);

export default router;
