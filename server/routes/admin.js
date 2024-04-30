import express from "express";
import {
  getAdmin,
  getStudent,
  getStudentQueries,
  addRemoveQueries,
  addRemoveStudent,
  getAlumni,
  getStudentAnswers,
  addRemoveAnswers,
  addRemoveAlumni,
} from "../controllers/admin.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Routercd();

/* READ */
router.get("/:id", verifyToken, getAdmin);
router.get("/:id/bookmarks", verifyToken, getStudentBookmarks);

/* UPDATE */
router.patch("/:id/:bookmarkId", verifyToken, addRemoveBookmarks);

export default router;