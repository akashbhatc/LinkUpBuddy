import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

// Test endpoint
router.get("/check", (req, res) => {
    res.status(200).json({ "status": "Okay" });
});

// Login endpoint
router.post("/login", login);

export default router;
