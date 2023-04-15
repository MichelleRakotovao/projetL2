


const tablet=document.querySelector(".table2");
const inputs =document.querySelectorAll('input[type="number"],input[type="text"]');

const valeur1=document.querySelector(".valeur1");
const valeur2=document.querySelector(".valeur2");

const stat=document.getElementById("stat");
const btn=document.getElementById("graphe");
const nom=document.getElementById("nom");
const pour=document.getElementById("pour");

const numbercheck=(value)=>{
    const donne=document.querySelector("#quan");
    const nombre=document.querySelector("#nombre");
        if(value<0){
            donne.classList.add("error");
        }else{
            donne.classList.remove("error");
        }
        
}
const pricecheck=(value)=>{
    const donne=document.querySelector("#pri");
    const erreur=document.querySelector("#montant");
        if(value<0){
            donne.classList.add("error");
            erreur.classList.add("error1");
        }else{
            donne.classList.remove("error");
            tablet.classList.remove("tab");
        } 
}

const stockval=(value)=>{
    const vale1=document.getElementById("val"); 
    if(value<0){
        vale1.classList.add("lettre");
    }
    else{
        vale1.classList.remove("lettre");
    }
}
const stockent=(value)=>{
    const vale2=document.getElementById("val1")
    if(value<0){
        vale2.classList.add("lettre");
    }
    else{
        vale2.classList.remove("lettre");
    }
}

const quantiteone=(value)=>{
    const quanti1=document.getElementById("quant1");
    if(value<0){
        quanti1.classList.add("lettre");
    }
    else{
        quanti1.classList.remove("lettre");
    }
}

const quantitetwo=(value)=>{
    const quanti2=document.getElementById("quant2");
    if(value<0){
        quanti2.classList.add("lettre");
    }
    else{
        quanti2.classList.remove("lettre");
    }
  
}


inputs.forEach((input)=>{
    input.addEventListener('input',(e)=>{
        switch(e.target.id){
            case "quan":
                numbercheck(e.target.value);
            break;
            case "pri":
                pricecheck(e.target.value);
                break;
            default:null;
        } 
    })
})
btn.addEventListener("click",()=>{
    stat.textContent="Statistique du quantités du produits";
    stat.classList.add("stat");
    nom.textContent="Libellé";
    pour.textContent="Pourcentage"
})


const bt=document.querySelector(".btn");
bt.addEventListener("click",(e)=>{
    setTimeout(()=>
{
    location.replace('http://localhost:8081/static/login.html');},1200);

})