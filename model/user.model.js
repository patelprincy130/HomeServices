import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    houseAddress:{
        street:{type:String,required:true},
        city:{type:String,required:true},
        postalCode:{type:String,required:true}
    },
    serviceType:{
        type:String,
        required:true,
        enum:["Cleaning","Installation","Plumbing","Electrical","Other"],
    }
    
});

export const User=mongoose.model("User",userSchema);

