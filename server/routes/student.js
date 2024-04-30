import express from "express";
import {
  getStudent,
  getStudentBookmarks,
  addRemoveBookmarks,
} from "../controllers/student.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getStudent);
router.get("/:id/bookmarks", verifyToken, getStudentBookmarks);

/* UPDATE */
router.patch("/:id/:bookmarkId", verifyToken, addRemoveBookmarks);

export default router;