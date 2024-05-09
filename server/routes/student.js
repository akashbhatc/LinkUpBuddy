import express from "express";
import {
  getStudent,
  getCompany,
  getStudentBookmarks,
  getStudentQueries,
  addRemoveStudentQueries,
  addRemoveStudent,
  addRemoveBookmarks, 
} from "../controllers/alumni.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
router.get("/check",(req,res)=>{
  res.status(200).json({"status":"Okay !"})
})
/* READ */
router.get("'/:id", verifyToken, getStudent);
router.get("'/:id/companies", verifyToken, getCompany);
router.get("/:id/queries", verifyToken, getStudentQueries);
router.get("/:id/queries", verifyToken, getStudentBookmarks);

/* UPDATE */
router.patch("/:id/:studID", verifyToken, addRemoveStudent);
router.patch("admin/:id/:compID", verifyToken, addRemoveBookmarks);
router.patch("/:id/:queryID", verifyToken, addRemoveStudentQueries);

export default router;