import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import protectedRoute from "./routes/protected.route.js";

dotenv.config();

const app=express();
const port=process.env.PORT || 3000;
const mongo_uri=process.env.MONGO_URI;

//to receive json data from body
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/homeservices/user",userRoute);
app.use("/api",protectedRoute);

mongoose.connect(mongo_uri)
.then(()=>console.log("connected to mongoDB"))
.catch((error)=>console.log("Error in DB connection: ",error));

app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
});