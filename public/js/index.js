fetch('http://localhost:8081/getTotal')
.then(res=>res.json())
.then(data=>total(data))

function total(data){
    var sum=0;
    console.log(data);
    for (const key in data) {
        console.log(data[key]['sum(quanti)'])
        sum+=data[key][0]['sum(quanti)']
    }
    valer1.value=sum
}

const valer1=document.querySelector(".valeur1");
var val1=document.querySelector(".val1");

var val2=document.querySelector(".val2");
var val3=document.querySelector(".val3");
var val4=document.querySelector(".val4");
var val5=document.querySelector(".val5");
var val6=document.querySelector(".val6");
var val7=document.querySelector(".val7");
const btn1=document.querySelector(".btn1");

//donne du deuxieme calcul
var prix1=document.querySelector(".prix1");
var prix2=document.querySelector(".prix2");
var prix3=document.querySelector(".prix3");
var prix4=document.querySelector(".prix4");
var prix5=document.querySelector(".prix5");
var prix6=document.querySelector(".prix6");
var prix7=document.querySelector(".prix7");
const btn2=document.querySelector(".btn2")
const valer2=document.querySelector(".valeur2");

//--------------------
const graphe=document.getElementById("graphe");
const affi1=document.getElementById("affi1");
const affi2=document.getElementById("affi2");
const affi3=document.getElementById("affi3");
const affi4=document.getElementById("affi4");

//--------------------
var val=document.getElementById("val");
var va=document.getElementById("val1");
var quant1=document.getElementById("quant1");
var quant2=document.getElementById("quant2");
const btn3=document.querySelector(".btn3");
const reponse=document.querySelector(".reponse");




const form1= document.getElementById("form1");


// function inserer(data){
    //-----------------------------
var price1=0;
var price2=0;
var price3=0;
var price4=0;
var price5=0;
var price6=0;
var price7=0;
//----------------------------
var num1=0;
var num2=0;
var num3=0;
var num4=0;
var num5=0;
var num6=0;
var num7=0;
fetch('http://localhost:8081/cat1')
.then(res=>res.json())
.then(data=>cate1(data,val1))
fetch('http://localhost:8081/cat2')
.then(res=>res.json())
.then(data=>cate1(data,val2))
fetch('http://localhost:8081/cat3')
.then(res=>res.json())
.then(data=>cate1(data,val3))
fetch('http://localhost:8081/cat4')
.then(res=>res.json())
.then(data=>cate1(data,val4))
fetch('http://localhost:8081/cat5')
.then(res=>res.json())
.then(data=>cate1(data,val5))
fetch('http://localhost:8081/cat6')
.then(res=>res.json())
.then(data=>cate1(data,val6))
fetch('http://localhost:8081/cat7')
.then(res=>res.json())
.then(data=>cate1(data,val7))
 

fetch('http://localhost:8081/prix1')
.then(res=>res.json())
.then(data=>cate2(data,prix1))
fetch('http://localhost:8081/prix2')
.then(res=>res.json())
.then(data=>cate2(data,prix2))
fetch('http://localhost:8081/prix3')
.then(res=>res.json())
.then(data=>cate2(data,prix3))
fetch('http://localhost:8081/prix4')
.then(res=>res.json())
.then(data=>cate2(data,prix4))
fetch('http://localhost:8081/prix5')
.then(res=>res.json())
.then(data=>cate2(data,prix5))
fetch('http://localhost:8081/prix6')
.then(res=>res.json())
.then(data=>cate2(data,prix6))
fetch('http://localhost:8081/prix7')
.then(res=>res.json())
.then(data=>cate2(data,prix7))



    const ajout = document.getElementById("ajou");
    ajout.addEventListener("click",(e)=>{
        e.preventDefault();
        const cat = document.getElementById("cat").value;
        const arti = document.getElementById("arti").value;
        const quan = parseInt(document.getElementById("quan").value);
        const pri = parseInt(document.getElementById("pri").value);
     
            switch (cat) {
                case "1":
                    num1+=quan;
                    price1+=pri*quan;
                    val1.value=num1;
                    prix1.value=price1;

                    break;
                case "2":
                    num2+=quan;
                    price2+=pri*quan;
                    val2.value=num2;
                    prix2.value=price2;
                    
                    break;
                case "3":
                    num3+=quan;
                    price3+=pri*quan;
                    val3.value=num3;
                    prix3.value=price3;
                    
                    break;
                case "4":
                    num4+=quan;
                    price4+=pri*quan;
                    val4.value=num4;
                    prix4.value=price4;
                 
                    break;
                case "5":
                    num5+=quan;
                    price5+=pri*quan;
                    val5.value=num5;
                    prix5.value=price5;
                    
                    break;
                case "6":
                    num6+=quan;
                    price6+=pri*quan;
                    val6.value=num6;
                    prix6.value=price6;
                    
                    break;
                case "7":
                    num7+=quan;
                    price7+=pri*quan;
                    val7.value=num7;
                    prix7.value=price7;
    
                    break;
                default:null;
            }
            fetch('http://localhost:8081/insert',{
                headers:{
                 'content-type':'application/json'
                },
                 method:'POST',
                 body:JSON.stringify({
                     arti:arti,
                     pri:pri,
                     quan:quan,
                     cat:cat
                 })
             })
             .then(response=>response.json())
    location.reload();
    
    })
    


// }
btn1.addEventListener("click",(e)=>{
    console.log("12121")    
        var somme=0;
        console.log("coucou");
        console.log(val1);
     somme=parseInt(val1.value)+parseInt(val2.value)+parseInt(val3.value)+parseInt(val4.value)+parseInt(val5.value)+parseInt(val6.value)+parseInt(val7.value);
     valer1.textContent=somme;
     console.log(somme);
     graphe.textContent="GRAPHES";
    
     affi3.textContent="Description de chaque catégorie en diagramme de courbe";
    const ctx3=document.querySelector("#courbe3");
    const myChart2 = new Chart(ctx3, {
        type:'line',
        data:{
                
            labels:['Santé et cosmétique','Bébé et enfant','Alimentation et locaux','Eléctronique et ménagère','Artisanaux','Accessoires sport','Animaux de compagnie'],
            datasets:[{
                labels:'Stocks',
                data:[val1.value,val2.value,val3.value,val4.value,val5.value,val6.value,val7.value],
                backgroundColor:['red','orange','yellow','blue','black','purple','pink'],
                borderColor:['red','orange','yellow','blue','black','purple','pink',]
            }]
        }
          }  
    );
    
    const ctx4=document.querySelector("#courbe4");
    const myChart3 = new Chart(ctx4, {
        type:'pie',
        data:{
            labels:['Santé et cosmétique','Bébé et enfant','Alimentation et locaux','Eléctronique et ménagère','Artisanaux','Accessoires sport','Animaux de compagnie'],
            datasets:[{
                data:[val1.value,val2.value,val3.value,val4.value,val5.value,val6.value,val7.value],
                backgroundColor:['red','orange','yellow','blue','black','purple','pink'],
                borderColor:['red','orange','yellow','blue','black','purple','pink',]
            }]
        }
          }  
    );
    affi4.textContent="Description de chaque catégorie en diagramme de donnate";
    
     const ctx=document.querySelector("#courbe");
     const myChart = new Chart(ctx, {
             type:'polarArea',
             data:{
                 labels:['Santé et Cosmétique','Bébé et Enfant','Alimentaion et locaux','Eléctronique et ménagère','Artisanaux','Accessoires Sport','Animaux de compagnie'],
                 datasets:[{
                     data:[val1.value,val2.value,val3.value,val4.value,val5.value,val6.value,val7.value],
                     backgroundColor:['red','orange','yellow','blue','black','purple','pink'],
                     borderColor:['red','orange','yellow','blue','black','purple','pink',]
                 }]
             }
               }  
     );
     affi1.textContent="Description de chaque catégorie en diagramme d' Aire";
    affi2.textContent="Description de chaque catégorie en diagramme de bande"
     const ctx2=document.querySelector("#courbe2");
     const myChart1 = new Chart(ctx2, {
        type:'bar',
        data:{
            labels:['Santé et cosmétique','Bébé et Enfant','Alimentation et locaux','Eléctronique et Ménagère','Artisanaux','Accessoires sport','Animaux de compagnie'],
            datasets:[{
                data:[val1.value,val2.value,val3.value,val4.value,val5.value,val6.value,val7.value],
                backgroundColor:['red','orange','yellow','blue','black','purple','pink'],
                borderColor:['red','orange','yellow','blue','black','purple','pink',]
            }]
        }
          }  
    );  
     })
     var somme2
     btn2.addEventListener("click",()=>{
    somme2=parseInt(prix1.value)+parseInt(prix2.value)+parseInt(prix3.value)+parseInt(prix4.value)+parseInt(prix5.value)+parseInt(prix6.value)+parseInt(prix7.value);
        valeur2.textContent=somme2 +"Ariary ("+ somme2*5+" franc)";
        console.log(btn2);
     })
function cate1(data,aff) {
    var categor=0;
    console.log(data)
    for (const key in data) {
        categor+=data[key][0]['sum(quanti)']
    }
    console.log(categor);
    aff.value=categor;
}


function cate2(data,aff) {
   var gory=0
   for (const key in data) {
    gory+=data[key][0]['sum(prix*quanti)']
   }
   console.log(gory)
   aff.value=gory
}