import express from "express";
import verifyToken from "../middlewares/auth.js";

const router=express.Router();

router.get("/dashboard",verifyToken,(req,res)=>{
    const {fullName}=req.user;
    res.status(200).json({message:`Welcome ${fullName}`, user:req.user});
});

export default router;