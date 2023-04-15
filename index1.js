const express=require('express');
const app=express();
const base=require('./base.js')

let fs=require('fs');
app.use(express.json())
const {urlencoded, response}=require('express');
const dbstock = require('./base.js');
const { resourceLimits } = require('worker_threads');
const { log } = require('console');
app.use(urlencoded({
    extended:false
}))
app.use('/static',express.static('public'));
app.get('/',(req,res)=>{
const data = fs.readFileSync('public/splash.html')
res.end(data.toString());
})
app.get('/file',(req,res)=>{
    const data= fs.readFileSync('../public/css/styles.css');
    res.end(data.toString());
})
app.post("/insert",(request,response)=>{
    const{arti,pri,quan,cat}=request.body;
    let category="cat"+cat;
    const db=dbstock.getdbstockInstance();
    //  const result1=db.cat(cat);
    // console.log(result1[0]['0']);
    //  editStatus(category, 100)
    editStatus(cat,quan);
    const insert=db.insert(arti,pri,quan,cat); 
    insert
        .then(data=>response.json({data:data}))
        .catch(err=>console.log(err))

})
app.get("/getAll",(request,response)=>{
    
})
app.listen(8081,()=>{
    console.log("Mandeha amizay");
})
app.get('/getAllData',(request,response)=>{
    console.log('test');
    const db=dbstock.getdbstockInstance();
    const result=db.getAllData();
    result
    .then(data=>response.json({data:data}))
    .catch(err=>console.log((err)))
})

app.post('/analyse',(request,response)=>{
    const{bvm,bmax,bmin,bjsc,stM,stS,bcat}=request.body;
    const db=dbstock.getdbstockInstance();


    
    const analyse=db.analyse(bvm,bmax,bmin,bjsc,stM,stS,bcat);
    analyse
    .then(data=>response.json({data:data}))
    .catch(err=>console.log(err))
})

app.get('/getAnalyse',(request,response)=>{
    console.log("vita");
    const db=dbstock.getdbstockInstance();
    const result1=db.getAnalyse();
    result1
    .then(data=>response.json({data:data}))
    .catch(err=>console.log(err))
})

app.get('/getTotal',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.total();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})

app.get('/cat1',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.cat1();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})
app.get('/cat2',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.cat2();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})
app.get('/cat3',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.cat3();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})
app.get('/cat4',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.cat4();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})
app.get('/cat5',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.cat5();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})
app.get('/cat6',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.cat6();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})
app.get('/cat7',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.cat7();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})

app.get('/prix1',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.prix1();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})

app.get('/prix2',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.prix2();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})

app.get('/prix3',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.prix3();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})

app.get('/prix4',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.prix4();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})

app.get('/prix5',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.prix5();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})

app.get('/prix6',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.prix6();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})

app.get('/prix7',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.prix7();
    result1
    .then(data=>res.json({data:data}))
    .catch(err=>console.log(err))
})

app.get('/stock',(req,res)=>{
    const db=dbstock.getdbstockInstance();
    const result1=db.stock();
    result1
   .then(data=>res.json({data:data}))
   .catch(err=>console.log(err))
})


app.get("/getQuantiteCat7",(req,res)=>{
    console.log("getQuantiteData mety!");
    let db=dbstock.getdbstockInstance()
    const result=db.getQuantiteCat()
    result
    .then (data=>response.json({data:data}))
    .catch(error=>console.log(error))
})


app.get("/getState",async function(req,res){

    editStatus('cat1', 100)
    res.send('ok')
})



async function editStatus(cat, qt){
    let data = fs.readFileSync("public/state.json")
    data = JSON.parse(data)
    
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const date = dd + '-' + mm + '-' + yyyy;
    let estate = {date,qt}
    // data[cat].push(estate)

    data = JSON.stringify(data);
    fs.writeFileSync("public/state.json", data);
}

app.post('/modifQuantite',(req,res)=>{
    const{nbr,nom}=req.body
    let db=dbstock.getdbstockInstance()
    const result=db.modifQuantite(nbr,nom)
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})
app.get('/moy1',(req,res)=>{
    let db=dbstock.getdbstockInstance();
    const result=db.moy1()
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})
app.get('/sec1',(req,res)=>{
    let db=dbstock.getdbstockInstance()
    const result=db.sec1()
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})

app.get('/moy2',(req,res)=>{
    let db=dbstock.getdbstockInstance();
    const result=db.moy2()
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})
app.get('/sec2',(req,res)=>{
    let db=dbstock.getdbstockInstance()
    const result=db.sec2()
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})

app.get('/moy3',(req,res)=>{
    let db=dbstock.getdbstockInstance();
    const result=db.moy3()
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})
app.get('/sec3',(req,res)=>{
    let db=dbstock.getdbstockInstance()
    const result=db.sec3()
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})

app.get('/moy4',(req,res)=>{
    let db=dbstock.getdbstockInstance();
    const result=db.moy4()
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})
app.get('/sec4',(req,res)=>{
    let db=dbstock.getdbstockInstance()
    const result=db.sec4()
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})

app.get('/moy5',(req,res)=>{
    let db=dbstock.getdbstockInstance();
    const result=db.moy5()
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})
app.get('/sec5',(req,res)=>{
    let db=dbstock.getdbstockInstance()
    const result=db.sec5()
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})


app.get('/moy6',(req,res)=>{
    let db=dbstock.getdbstockInstance();
    const result=db.moy6()
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})
app.get('/sec6',(req,res)=>{
    let db=dbstock.getdbstockInstance()
    const result=db.sec6()
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})

app.get('/moy7',(req,res)=>{
    let db=dbstock.getdbstockInstance();
    const result=db.moy7()
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})
app.get('/sec7',(req,res)=>{
    let db=dbstock.getdbstockInstance()
    const result=db.sec7()
    result
    .then(data=>res.json({data:data}))
    .catch(error=>console.log(error))
})