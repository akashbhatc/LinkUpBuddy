import express from "express";
import {
  getAdmin,
  getStudentQueries,
  addRemoveQueries,
  addRemoveStudent,
  getAlumniAnswers,
  addRemoveAnswers,
  addRemoveAlumni,
  addRemoveCompany, 
} from "../controllers/admin.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Routercd();

/* READ */
router.get("'admin/:id", verifyToken, getAdmin);
router.get("/:id/queries", verifyToken, getStudentQueries);
router.get("/:id/answers", verifyToken, getAlumniAnswers);
/* UPDATE */
router.patch("admin/:id/:studID", verifyToken, addRemoveStudent);
router.patch("admin/:id/:alumID", verifyToken, addRemoveAlumni);
router.patch("admin/:id/:compID", verifyToken, addRemoveCompany);
router.patch("admin/:id/:queryID", verifyToken, addRemoveQueries);
router.patch("admin/:id/:answerID", verifyToken, addRemoveAnswers);

export default router;