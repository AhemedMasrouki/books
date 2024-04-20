const mongoose=require('mongoose')
const router = require('../routes/userRoutes')

const userSchema=mongoose.Schema({
        email:{type:String,require:true},
        password:{type:String,require:true},
        name:String,
}) 

const User=mongoose.model("users",userSchema)


module.exports=router