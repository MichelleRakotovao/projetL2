const express=require('express')
const port=5000;
const dbstock=require("./db.js")
const cors=require('cors')
const dotenv=require("dotenv")
const fs=require("fs")
const { urlencoded } = require('express');
const { log } = require('console');
const app=express()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(urlencoded({
    extended:false
}))
app.use('/static', express.static('public'))
app.get('/',(req,res)=>{
    const data = fs.readFileSync('public/index.html')
    res.end(data.toString())
})
app.get('/file',(req,res)=>{
    const data = fs.readFileSync('../public/style.css')
    res.end(data.toString())
})
//creation
app.post("/insert" ,(request,response)=>{
    
})
app.get("/getAll",(request,response)=>{
    
})
app.listen(port,()=>{
    console.log('server started on port '+ port +" ,Mety zany!");
})
app.get("/getAllData",(req,res)=>{
    console.log("test");
    const db=dbstock.getdbstockInstance();
    const result=db.getAllData()
    result
    .then(data=>res.json({data:data}))
    .catch((err) => {
        console.log(err);
    })
})
app.get("/getQuantiteCat",(req,res)=>{
      console.log("qetQuantiteData mety!");
      let db=dbstock.getdbstockInstance()
      const result=db.getQuantiteCat()
      result
      .then
})
