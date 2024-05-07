import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.get("/check",(req,res)=>{
    res.status(200).json({"status":"okay"})
});

router.post("/login", login);

export default router;