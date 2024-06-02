import express from "express";
import {
  getAdmin,
  getStudent,
  getAlumni,
  getStudentQueries,
  removeQueries,
  removeStudent,
  getAlumniAnswers,
  removeAnswers,
  removeAlumni,
  addCompany,
  removeCompany,
} from "../controllers/admin.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Test endpoint
router.get("/check", (req, res) => {
  res.status(200).json({ "status": "Okay !" });
});

/* READ */
// Get admin by ID
router.get("/:id/admin", verifyToken, getAdmin);

// Get student by ID
router.get("/:id/student/:studId", getStudent);

// Get alumni by ID
router.get("/:id/alumni/:alumId", verifyToken, getAlumni);

// Get queries of a specific student
router.get("/:id/student/:studId/queries", verifyToken, getStudentQueries);

// Get answers of a specific alumni
router.get("/:id/alumni/:alumId/answers", verifyToken, getAlumniAnswers);

/* UPDATE */
router.post("/addCompany", verifyToken, addCompany);
// Remove a student
router.delete("/:id/student/:studId/remove", verifyToken, removeStudent);

// Remove an alumni
router.delete("/:id/alumni/:alumId/remove", verifyToken, removeAlumni);

// Remove a company
router.delete("/:id/company/:companyId/remove", verifyToken, removeCompany);

// Remove a query
router.delete("/:id/query/:queryId/remove", verifyToken, removeQueries);

// Remove an answer
router.delete("/:id/answer/:answerId/remove", verifyToken, removeAnswers);

export default router;
