fetch('http://localhost:8081/stock')
.then(res=>res.json())
.then(data=>affichage(data))

const al=document.getElementById("moye");
const util=document.getElementById("utile");
const cour=document.getElementById("cour");
const fi=document.getElementById("fini");
const ve=document.getElementById("vend");

const btn1=document.querySelector(".btn1");
const btn2=document.querySelector(".btn2");
const btn3=document.querySelector(".btn3");
const btn4=document.querySelector(".btn4");
const res1=document.getElementById("primary");
const res2=document.getElementById("track");
const res3=document.getElementById("end");
const res4=document.getElementById("vende");
//-------------------------------
//----------------------------
const mate=document.getElementById("mat");
const trac=document.getElementById("tra");
const prop=document.getElementById("pro");
const fif=document.getElementById("finis");
const ann=document.getElementById("ann");
const oper=document.getElementById("ope");

const btn5=document.getElementById("btn5");
const btn6=document.getElementById("btn6");
const btn7=document.getElementById("btn7");
const res5=document.getElementById("prim");
const res6=document.getElementById("manu");
const res7=document.getElementById("ends");
//-----------------------


 
 var b=" ";
 util.addEventListener("input",(e)=>{
    b=parseFloat(e.target.value);
 })

 var c=" ";
 cour.addEventListener("input",(e)=>{
    c=parseFloat(e.target.value);
 })

 var d=" ";
 fi.addEventListener("input",(e)=>{
    d=parseFloat(e.target.value);
 })
 var eu=" ";
 ve.addEventListener("input",(e)=>{
    eu=parseFloat(e.target.value);
 })

 var resu1=" ";
 btn1.addEventListener("click",()=>{
    // console.log(a)
    resu1=b/al.value;
    res1.textContent=resu1.toFixed(3);
    res1.classList.add("color");
 })

var resu2=" ";
btn2.addEventListener("click",()=>{
    resu2=c/al.value;
    res2.textContent=resu2.toFixed(3);
    res2.classList.add("color");
})

var resu3=" ";
btn3.addEventListener("click",()=>{
    resu3=d/al.value;
    res3.textContent=resu3.toFixed(3);
    res3.classList.add("color");
})

var resu4=" ";
btn4.addEventListener("click",()=>{
    resu4=eu/al.value;
 res4.textContent=resu4.toFixed(3);
 res4.classList.add("color");
})


var f=" ";
mate.addEventListener("input",(e)=>{
    f=parseInt(e.target.value);
})
var g=" ";
trac.addEventListener("input",(e)=>{
    g=parseInt(e.target.value);
})

var h=" ";
prop.addEventListener("input",(e)=>{
    h=parseInt(e.target.value);
})

var i=" ";
fif.addEventListener("input",(e)=>{
    i=parseInt(e.target.value);
})

var j=" ";
ann.addEventListener("input",(e)=>{
    j=parseInt(e.target.value);
})

var k=" ";
oper.addEventListener("input",(e)=>{
    k=parseInt(e.target.value);
})
let resu5=" ";
btn5.addEventListener("click",(e)=>{
   
    resu5=(f*k)/j;
    res5.textContent=resu5.toFixed(3); 
    res5.classList.add("color");
})

let resu6=" ";
btn6.addEventListener("click",(e)=>{
    resu6=(g*k)/h;
    res6.textContent=resu6.toFixed(3);
    res6.classList.add("color");
})

let resu7=" ";
btn7.addEventListener("click",(e)=>{
    resu7=(i*k)/h;
    res7.textContent=resu7.toFixed(3);
    res7.classList.add("color");
})

function affichage(data) {
    var categor=0;
    console.log(data)
    for (const key in data) {
        console.log(data[key][0]['sum(vente_moyen)'])
        console.log(data[key]);
        categor+=data[key][0]['sum(vente_moyen)']
    }
     al.value=categor
}
