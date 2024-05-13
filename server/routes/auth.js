import express from "express";
import { loginStudent,loginAlumni,loginAdmin } from "../controllers/auth.js";
import { registerStudent,registerAlumni } from "../controllers/auth.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

// Test endpoint
router.get("/check", (req, res) => {
    res.status(200).json({ "status": "Okay" });
});
//SIGNUP
router.post("/registerStudent", registerStudent);
router.post("/registerAlumni", registerAlumni);
// Login endpoint
router.post("/loginStudent", loginStudent);
router.post("/loginAlumni", verifyToken, loginAlumni);
router.post("/loginAdmin", loginAdmin);

export default router;
