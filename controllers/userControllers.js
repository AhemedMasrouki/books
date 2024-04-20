    const User=require("../models/userModel")
    const bcrypt=require('bcrypt')
    const jwt=require('jsonwebtoken')
const GetDone=(req,res)=>{
    res.send("Routing")
}


const Register=async(req,res)=>{

try {
    const {name,email,password}=req.body
    const existEmail=await User.findOne({email:email})
    if(existEmail){
res.status(200).json({msg:"Email already exist,Pls make sure to login"})
    }
else{
const HashPW=await bcrypt.hash(password,10)
console.log(HashPW)
    const myuser=await User.create({email,HashPW})
    const token=await jwt.sign({id:myuser._id},process.env.JWT_KEY,{expiresIn:"7D"})
    console.log(HashPW) 
res.status(201).json({msg:"Register done",token})
}


} catch (error) {
    res.status(500).json({msg:"somthing went wrong",error})
}

}



module.exports={GetDone,Register}