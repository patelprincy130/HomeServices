import config from "../config.js";
import jwt from "jsonwebtoken";

const verifyToken=(req,res,next)=>{
    const authHeader=req.headers['authorization'];
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({errors:"Access denied: Please provide a token."});
    }
    const token=authHeader.split(" ")[1];
    try{
        const decoded=jwt.verify(token,config.JWT_USER_PASSWORD);
        //console.log(decoded);
        req.user=decoded;
        next();
    }catch(error){
        console.log("Error in authorization ",error);
        return res.status(403).json({errors:"Invalid token."});
    }
}

export default verifyToken;