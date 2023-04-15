

fetch('http://localhost:8081/getAllData')
.then(response=>response.json())
.then(data=>insert(data['data']));
i=0;
var n=0
function getId(e){
    return document.getElementById(e);
}
function creat(q){
    return document.createElement(q);
}

var blib=document.getElementById("libelle");
var bcate=document.getElementById("categorie").value;
var bqua=document.getElementById("quantite").value;
var mess=getId('mess');
const btn=getId('valider');
const sup=getId('suppr')
const select=getId('selectT');

fetch('http://localhost:8081/getTotal')
.then(res=>res.json())
.then(data=>total(data))

function total(data){
    var tot=getId('tot')
    var sum=0;
    console.log(data);
    for (const key in data) {
        console.log(data[key]['sum(quanti)'])
        sum+=data[key][0]['sum(quanti)']
        console.log(sum);
    }
    tot.innerHTML=sum
}

getId('voir').addEventListener('click',(e)=>{
    e.preventDefault()
    const cat=getId('cat').value
   switch (cat){
    case "1":
        fetch('http://localhost:8081/cat1')
        .then(res=>res.json())
       .then(ca1=>cate(ca1))

        break;
     case "2":
        fetch('http://localhost:8081/cat2')
        .then(res=>res.json())
       .then(data=>cate(data))
         break;
     case "3":
        fetch('http://localhost:8081/cat3')
        .then(res=>res.json())
       .then(data=>cate(data))
        break;
     case "4":
        fetch('http://localhost:8081/cat4')
        .then(res=>res.json())
       .then(data=>cate(data))
        break;
      case "5":
        fetch('http://localhost:8081/cat5')
        .then(res=>res.json())
       .then(data=>cate(data))
        break;
     case "6":
        fetch('http://localhost:8081/cat6')
        .then(res=>res.json())
       .then(data=>cate(data))
        break;
     case "7":
        fetch('http://localhost:8081/cat7')
        .then(res=>res.json())
       .then(data=>cate(data))
        break;

   }
})

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const libelle=getId('libelle').value;
    const categorie=getId('categorie').value;
    const quantite=getId('quantite').value;
fetch('http://localhost:8081/modifQuantite',{
    headers:{
        'content-type':'application/json'
    },
    method:'POST',
    body:JSON.stringify({
        nbr:quantite,
        nom:libelle
    })
})
.then(response=>response.json())
location.reload();
        })
        
        function insert(data){
            
            var body=getId('donnee');
            const table=''
            for(key in data){
    const tr=creat('tr');
   var td=creat('td');
    tr.id='L'+i;
    td.innerHTML=data[key].libelle;
    tr.appendChild(td);
    body.appendChild(tr);
    console.log(data[key].libelle);
    var td=creat('td');
    switch (data[key].idCategories) {
        case 1:
            td.innerHTML="santé et cosmétique";
            break;
            case 2:
                td.innerHTML="bébé et enfant";
                
            break;
            case 3:
                td.innerHTML="Alimentation et locaux";
                    
             break;
            case 4:
                td.innerHTML="Eléctronique et ménagère";
                        
             break;
            case 5:
                td.innerHTML="Artisanaux";
                            
            break;
            case 6:
            td.innerHTML="Accessoires sports";
                                
             break;
            case 7:
            td.innerHTML="Accessoire d'animaux";
                                    
            break;
    
        default:
            break;
    }
    tr.appendChild(td);
    body.appendChild(tr);
    
     var td=creat('td');
    td.innerHTML= data[key].prix +' Ar'
    tr.appendChild(td);
     body.appendChild(tr);

     var td=creat('td');
    td.innerHTML= data[key].quanti 
    tr.appendChild(td);
     body.appendChild(tr);
    
}
}
const bt=document.querySelector(".btn");
bt.addEventListener("click",(e)=>{
    setTimeout(()=>
{
    location.replace('http://localhost:8081/static/login.html');},1200);

})

const pro =document.getElementById("pro");
pro.addEventListener("click",(e)=>{
    setTimeout(()=>
    {
        location.replace('http://localhost:8081/static/produit.html');},00);
})


function cate(ca1) {
    console.log(ca1);
    var nbCat=getId('nbCat')
    var categor=0;
    for (const key in ca1) {
        console.log(ca1[key][0]['sum(quanti)'])
        console.log(ca1[key]);
        categor+=ca1[key][0]['sum(quanti)']
    }
    console.log(categor);

  nbCat.value=categor

}