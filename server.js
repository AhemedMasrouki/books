const express=require('express')
const app =express()
const dotenv=require('dotenv')
dotenv.config({path:"./config/.env"})
const connectDB=require("./config/connectDB")
port=process.env.PORT || 5000
app.use(express.json())
connectDB()

app.use('/api',require('./routes/userRoutes'))
app.listen(port,(err)=>{
    err? console.log("error:",err):console.log("Server is running in port :",port)
})