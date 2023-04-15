

const inputs =document.querySelectorAll('input[type="text"],input[type="number"]');
const moye=(value)=>{
    const alerte1=document.getElementById("moye");
    if(value<0){
        alerte1.classList.add("error");
    }
    else{
        alerte1.classList.remove("error");
    }
}
const utile=(value)=>{
    const alerte=document.getElementById("utile");
    if(value<0){
        alerte.classList.add("error");
    }
    else{
        alerte.classList.remove("error");
    }
}
const cou=(value)=>{
    const alerte=document.getElementById("cour");
    if(value<0){
        alerte.classList.add("error");
    }
    else{
        alerte.classList.remove("error");
    }
}
const finie=(value)=>{
    const alerte=document.getElementById("fini");
    if(value<0){
        alerte.classList.add("error");
    }
    else{
        alerte.classList.remove("error");
    }
}
const ven=(value)=>{
    const alerte=document.getElementById("vend");
    if(value<0){
        alerte.classList.add("error");
    }
    else{
        alerte.classList.remove("error");
    }
}
const mat=(value)=>{
    const alerte=document.getElementById("mat");
    if(value<0){
        alerte.classList.add("error");
    }
    else{
        alerte.classList.remove("error");
    }
}
const tra=(value)=>{
    const alerte=document.getElementById("tra");
    if(value<0){
        alerte.classList.add("error");
    }
    else{
        alerte.classList.remove("error");
    }
}
const pro=(value)=>{
    const alerte=document.getElementById("pro");
    if(value<0){
        alerte.classList.add("error");
    }
    else{
        alerte.classList.remove("error");
    }
}
const fin=(value)=>{
    const alerte=document.getElementById("fini");
    if(value<0){
        alerte.classList.add("error");
    }
    else{
        alerte.classList.remove("error");
    }
}
const ope=(value)=>{
    const alerte=document.getElementById("ope");
    if(value<0){
        alerte.classList.add("error");
    }
    else{
        alerte.classList.remove("error");
    }
}
inputs.forEach((input)=>{
    input.addEventListener('input',(e)=>{
        switch (e.target.id){
            case "moye":
                  moye(e.target.value);
                break;
            case "utile":
                utile(e.target.value);
                break;
            case "cour":
                cou(e.target.value);
                break;
            case "fini":
                finie(e.target.value);
                break;
            case "finis":
                finie(e.target.value);
            case "vend":
                ven(e.target.value);
            case "mat":
                mat(e.target.value);
            case "tra":
                tra(e.target.value);
            case "pro":
                pro(e.target.value);
            case "ope":
                ope(e.target.value);
                break;
                default:null;break;
            
        }
    })
})

const bt=document.querySelector(".btn");
bt.addEventListener("click",(e)=>{
    setTimeout(()=>
{
    location.replace('http://localhost:8081/static/login.html');},1200);

})



