import express from "express";

const router = express.Router();

router.get("/send",(req,res)=>{
    res.send("send my message")
});

export default router;

