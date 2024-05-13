import express from "express";
import {
  getAlumni,
  getCompany,
  getAlumniAnswers,
  removeAlumniAnswers,
  removeAlumni, 
} from "../controllers/alumni.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Test endpoint
router.get("/check", (req, res) => {
  res.status(200).json({ "status": "Okay !" });
});

/* READ */
// Get alumni by ID
router.get("/:id", verifyToken, getAlumni);

// Get company by ID
router.get("/:id/company/:companyId", verifyToken, getCompany);

// Get alumni answers
router.get("/:id/answers", verifyToken, getAlumniAnswers);

/* UPDATE */
// Remove alumni
router.delete("/:id/remove", verifyToken, removeAlumni);

// Remove alumni answers
router.delete("/:id/:answerId/remove", verifyToken, removeAlumniAnswers);

export default router;
