const express=require('express')
const router=express.Router()
const {GetDone, Register} =require('../controllers/userControllers')

router.get("/",GetDone)
router.post('/post',Register)

module.exports=router