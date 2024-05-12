import express from "express";
import { createQueries, getFeedQueries, getUserQueries } from "../controllers/queries.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Test endpoint
router.get("/check", (req, res) => {
    res.status(200).json({ "status": "Okay" });
});

/* CREATE */
// Endpoint to create a new query
router.post("/", verifyToken, createQueries);

/* READ */
// Endpoint to get feed queries
router.get("/feed", verifyToken, getFeedQueries);

// Endpoint to get user-specific queries
router.get("/user/:userId", verifyToken, getUserQueries);

export default router;
