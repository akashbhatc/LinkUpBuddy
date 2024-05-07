import express from "express";

const router = express.Router();
router.get("/check",(req,res)=>{
  res.status(200).json({"status":"Okay !"})
})

export default router