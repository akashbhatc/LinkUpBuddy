import express from "express";
import {
  getAlumni,
  getCompany,
  getAlumniAnswers,
  removeAlumniAnswers,
  addAlumniAnswers,
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
router.get("/:id", getAlumni);

// Get company by ID
router.get("/:id/company/:companyId", getCompany);

// Get alumni answers
router.get("/:id/answers", getAlumniAnswers);

/* UPDATE */
// Remove alumni
router.delete("/:id/remove", removeAlumni);

// Remove alumni answers
router.delete("/:id/:answerId/remove",removeAlumniAnswers);
router.post("/:id/:queryId/answer", addAlumniAnswers);
export default router;
