nbr_qte=0;
stockAlert=57;
const loko1="#eaebeb";
const loko2="#4bc5ce";
let quantite=document.getElementById("quantite")
var ctx=document.querySelector(".graphe");
const Container=document.getElementById("container");
const  Donnee=document.getElementById("donnee");
const ajouter=document.getElementById("ajouter")
Donnee.style.backgroundImage="linear-gradient("+loko1+","+loko2+")";
Container.style.backgroundImage="linear-gradient("+loko1+","+loko2+")";
let Select=document.querySelector("#sel-cat")
quantite.value=100
var data=[];
n=4
let labels=["4 mars 2022","22 avril 2022","30juin 2022","26 Août 2022"];
var chart=new Chart(ctx,{
    type:'line',
    data:{
        labels,
        datasets:[{
            label:"Quantité en stock",
            backgroundColor:'#fcb424',  
            data:[60,81,58,100],
        },{
            label:"Stock d'alert",
            data:[stockAlert],
            backgroundColor:"red"
        }],
    },
    options:{
        responsive:true,
    }
})  


const d=new Date()
console.log(d.toLocaleDateString());
ajouter.addEventListener('click',(e)=>{
    console.log('ajouter successfully');
    fetch('http://localhost:/parCategorie')
})
function ajoutDateQuantite(date,quantite){
      
}


