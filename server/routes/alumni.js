import express from "express";
import {
  getAlumni,
  getCompany,
  getAlumniAnswers,
  addRemoveAlumniAnswers,
  addRemoveAlumni, 
} from "../controllers/alumni.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
router.get("/check",(req,res)=>{
  res.status(200).json({"status":"Okay !"})
})
/* READ */
router.get("'/:id", verifyToken, getAlumni);
router.get("'/:id/companies", verifyToken, getCompany);
router.get("/:id/answers", verifyToken, getAlumniAnswers);
/* UPDATE */
router.patch("/:id/:alumID", verifyToken, addRemoveAlumni);
router.patch("/:id/:answerID", verifyToken, addRemoveAlumniAnswers);

export default router;