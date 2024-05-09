import express from "express";
import {
  getAdmin,
  getStudent,
  getAlumni,
  getStudentQueries,
  addRemoveQueries,
  addRemoveStudent,
  getAlumniAnswers,
  addRemoveAnswers,
  addRemoveAlumni,
  addRemoveCompany, 
} from "../controllers/admin.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
router.get("/check",(req,res)=>{
  res.status(200).json({"status":"Okay !"})
})
/* READ */
router.get("'/:id", verifyToken, getAdmin);
router.get("'/:id", verifyToken, getStudent);
router.get("'/:id", verifyToken, getAlumni);
router.get("/:id/queries", verifyToken, getStudentQueries);
router.get("/:id/answers", verifyToken, getAlumniAnswers);
/* UPDATE */
router.patch("/:id/:studID", verifyToken, addRemoveStudent);
router.patch("/:id/:alumID", verifyToken, addRemoveAlumni);
router.patch("/:id/:compID", verifyToken, addRemoveCompany);
router.patch("/:id/:queryID", verifyToken, addRemoveQueries);
router.patch("/:id/:answerID", verifyToken, addRemoveAnswers);

export default router;