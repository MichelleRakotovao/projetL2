const express=require('express');
const router=express.Router();
const index1=require('../js/index1');
const config=require('bdconfig');
 
router.get('/',(req,res)=>{
    index1.find((err,docs)=>{
        console.log(docs);
    })
})
module.exports=router;