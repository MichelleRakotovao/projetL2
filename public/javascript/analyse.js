// Analyse de stock
var donnee=document.querySelector('#donnee');
var stock_maximum=document.getElementById('max');
var stockm=document.getElementById("stockm");
var stocks=document.getElementById("stocks");
var stock_minimum=document.getElementById('min');
var vente_moyenne=document.getElementById('vm');
var jsc=document.getElementById("jsc");
var btn=document.querySelector('#valider');
var mess=document.querySelector('#mess');
const cat =document.getElementById("cat").value; 



var Analyse_de_Stock={};
val1=" ";
val2=" ";
val3=" ";


// donnee.innerHTML+="<tr><td>"+val1+"</td><td >"+val2+"</td><td >";
max.addEventListener("input",(e)=>{
    val1=parseInt(e.target.value);
});
jsc.addEventListener("input",(e)=>{
    val2=parseInt(e.target.value);
});

vente_moyenne.addEventListener("input",(e)=>{
    val3=parseInt(e.target.value);
});

var stock=" ";
var stock1=" ";
btn3.addEventListener("click",()=>{
    var bcat='';
    var bmax=stock_maximum.value;
var bmin=stock_minimum.value;
var bvm=vente_moyenne.value;
var bjsc=jsc.value;
    var cat=document.getElementById("cat").value;
    console.log(cat);
    stock=val1/2;
    stockm.textContent=stock;
    stock1=val2*val3;
    stocks.textContent=stock1;
   
    switch (cat){
        case "1":
            bcat=1;
            break;
        case "2":
            bcat=2
            break;
        case "3":
            bcat=3
            break;
            case "4":
                bcat=4
                break;
                case "5":
                    bcat=5
                    break;
                    case "6":
                        bcat=6
                        break;
                        case "7":
                            bcat=7
                            break;    
                        }
                        
                        
                        console.log("mandeha");
   fetch('http://localhost:8081/analyse',{
    headers:{
     'content-type':'application/json'
    },
     method:'POST',
     body:JSON.stringify({
         bvm:bvm,
         bmax:bmax,
         bmin:bmin,
         bjsc:bjsc,
         stM:stock,
         stS:stock1,
         bcat:bcat

     })
 })
 .then(response=>response.json())
 });
 var ctx = document.querySelector('#des');

 var val3=document.querySelector("#pc");

 var err=document.querySelector('#err');

 var jours='';
 var pc=0;
 var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["17-01-2022","17-02-2022","17-03-2022","17-04-2022","17-05-2022","17-06-2022","17-07-2022"],
        datasets: [{
            label: "stock",
            backgroundColor: 'rgb(255 ,99 ,132, 0.25)',
            borderColor: 'rgb(255 ,99 ,132, 0.25)',
            data: [],
            tension: 0,
            pointStyle: 'line'
        },
        {
            label: 'Stock de sécurité',
            data:[],
            backgroundColor: 'rgb(228, 2, 21, 0.25)',
            pointStyle: 'line'
        }, {
            label: 'Point de commande',
            data: [],
            backgroundColor: 'rgb(123, 2, 110, 0.25)',
            pointStyle: 'line'
        }],
        
        Option: {
            plugins: {
                title: {
                    display: true,
                    text: 'Custom Chart Title'
                }
            },
            responsive:true
           
        }
    }
   });

 const ok=document.querySelector("#ok");
    ok.addEventListener('click',(e)=>{
        delai=parseInt(document.getElementById('pc').value)
        e.preventDefault()
       var cate=document.getElementById('cat').value
         console.log(cate);

        switch(cate){
            case "1":
                async function name(){
                    await fetch('http://localhost:8081/cat1')
                    .then(async function(r){
                        q=await r.json()
                    })
                    await fetch('http://localhost:8081/sec1')
                    .then(async function(re){
                        scc=await re.json()
                    })
                    await fetch('http://localhost:8081/moy1')
                    .then(async function(res){
                        vtm=await res.json()
                    })

                    sec=scc['data'][0]['stock_sec']
                    console.log(sec);
                    vtm1=vtm['data'][0]['vente_moyen']
                    var pc=vtm1*delai
                    s=q['data'][0]['sum(quanti)']
                    console.log(s)
                    chart.data.datasets.forEach(element => {
                        if(element.label=='stock'){
                            element.data=[45000,9852,32145,98753,54455,85321]
                            element.data.push(s)
                        }
                    });
                    chart.data.datasets.forEach(element => {
                        if(element.label=='Stock de sécurité'){
                            element.data=[sec,sec,sec,sec,sec,sec,sec]
                        }
                    });
                    chart.data.datasets.forEach(element => {
                        if(element.label=='Point de commande'){
                            element.data=[pc,pc,pc,pc,pc,pc,pc]
                        }
                    });
                  chart.update();
                }
                name();   
                break;
            case "2":
                async function ca1(){
                    await fetch('http://localhost:8081/cat2')
                    .then(async function(res){
                        q=await res.json()
                    })
                    await fetch('http://localhost:8081/sec2')
                    .then(async function(res){
                        scc=await res.json()
                    })
                    await fetch('http://localhost:8081/moy2')
                    .then(async function(res){
                        vtm=await res.json()
                    })

                    sec=scc['data'][0]['stock_sec']
                    vtm1=vtm['data'][0]['vente_moyen']
                    var pc=vtm1*delai
                    s=q['data'][0]['sum(quanti)']
                    chart.data.datasets.forEach(element => {
                        if(element.label=='stock'){
                            element.data=[47201,69842,32578,48531,98753,485324]
                            element.data.push(s)
                        }
                    });
                    chart.data.datasets.forEach(element => {
                        if(element.label=='Stock de sécurité'){
                            element.data=[sec,sec,sec,sec,sec,sec,sec]
                        }
                    });
                    chart.data.datasets.forEach(element => {
                        if(element.label=='Point de commande'){
                            element.data=[pc,pc,pc,pc,pc,pc,pc]
                        }
                    });
                  chart.update();
                }
                ca1();
                break;

            case "3":
                async function ca2(){
                    await fetch('http://localhost:8081/cat3')
                    .then(async function(res){
                        q=await res.json()
                    })
                    await fetch('http://localhost:8081/sec3')
                    .then(async function(res){
                        scc=await res.json()
                    })
                    await fetch('http://localhost:8081/moy3')
                    .then(async function(res){
                        vtm=await res.json()
                    })

                    sec=scc['data'][0]['stock_sec']
                    vtm1=vtm['data'][0]['vente_moyen']
                    var pc=vtm1*delai
                    s=q['data'][0]['sum(quanti)']
                    chart.data.datasets.forEach(element => {
                        if(element.label=='stock'){
                            element.data=[47211,69552,81201,75423,35697,94201]
                            element.data.push(s)
                        }
                    });
                    chart.data.datasets.forEach(element => {
                        if(element.label=='Stock de sécurité'){
                            element.data=[sec,sec,sec,sec,sec,sec,sec]
                        }
                    });
                    chart.data.datasets.forEach(element => {
                        if(element.label=='Point de commande'){
                            element.data=[pc,pc,pc,pc,pc,pc,pc]
                        }
                    });
                  chart.update();
                }
                ca2();
            break;

                case "4":
                    async function ca3(){
                        await fetch('http://localhost:8081/cat4')
                        .then(async function(res){
                            q=await res.json()
                        })
                        await fetch('http://localhost:8081/sec4')
                        .then(async function(res){
                            scc=await res.json()
                        })
                        await fetch('http://localhost:8081/moy4')
                        .then(async function(res){
                            vtm=await res.json()
                        })
    
                        sec=scc['data'][0]['stock_sec']
                        vtm1=vtm['data'][0]['vente_moyen']
                        var pc=vtm1*delai
                        s=q['data'][0]['sum(quanti)']
                        chart.data.datasets.forEach(element => {
                            if(element.label=='stock'){
                                element.data=[65953,85312,10254,62140,65422,65745]
                                element.data.push(s)
                            }
                        });
                        chart.data.datasets.forEach(element => {
                            if(element.label=='Stock de sécurité'){
                                element.data=[sec,sec,sec,sec,sec,sec,sec]
                            }
                        });
                        chart.data.datasets.forEach(element => {
                            if(element.label=='Point de commande'){
                                element.data=[pc,pc,pc,pc,pc,pc,pc]
                            }
                        });
                      chart.update();
                    }
                    ca3();
            break;

                case "5":
                    async function ca4(){
                        await fetch('http://localhost:8081/cat5')
                        .then(async function(res){
                            q=await res.json()
                        })
                        await fetch('http://localhost:8081/sec5')
                        .then(async function(res){
                            scc=await res.json()
                        })
                        await fetch('http://localhost:8081/moy5')
                        .then(async function(res){
                            vtm=await res.json()
                        })
    
                        sec=scc['data'][0]['stock_sec']
                        vtm1=vtm['data'][0]['vente_moyen']
                        var pc=vtm1*delai
                        s=q['data'][0]['sum(quanti)']
                        chart.data.datasets.forEach(element => {
                            if(element.label=='stock'){
                                element.data=[82126,62147,30147,64257,50478,34452]
                                element.data.push(s)
                            }
                        });
                        chart.data.datasets.forEach(element => {
                            if(element.label=='Stock de sécurité'){
                                element.data=[sec,sec,sec,sec,sec,sec,sec]
                            }
                        });
                        chart.data.datasets.forEach(element => {
                            if(element.label=='Point de commande'){
                                element.data=[pc,pc,pc,pc,pc,pc,pc]
                            }
                        });
                      chart.update();
                    }
                    ca4();
            break;

                case "6":
                    async function ca5(){
                        await fetch('http://localhost:8081/cat6')
                        .then(async function(res){
                            q=await res.json()
                        })
                        await fetch('http://localhost:8081/sec6')
                        .then(async function(res){
                            scc=await res.json()
                        })
                        await fetch('http://localhost:8081/moy6')
                        .then(async function(res){
                            vtm=await res.json()
                        })
    
                        sec=scc['data'][0]['stock_sec']
                        vtm1=vtm['data'][0]['vente_moyen']
                        var pc=vtm1*delai
                        s=q['data'][0]['sum(quanti)']
                        chart.data.datasets.forEach(element => {
                            if(element.label=='stock'){
                                element.data=[84566,64412,42013,90155,75661,51323]
                                element.data.push(q['data'][0]['sum(qua)'])
                            }
                        });
                        chart.data.datasets.forEach(element => {
                            if(element.label=='Stock de sécurité'){
                                element.data=[sec,sec,sec,sec,sec,sec,sec]
                            }
                        });
                        chart.data.datasets.forEach(element => {
                            if(element.label=='Point de commande'){
                                element.data=[pc,pc,pc,pc,pc,pc,pc]
                            }
                        });
                      chart.update();
                    }
                    ca5();

            break;
                case "7":
                    async function ca6(){
                        await fetch('http://localhost:8081/cat7')
                        .then(async function(res){
                            q=await res.json()
                        })
                        await fetch('http://localhost:8081/sec7')
                        .then(async function(res){
                            scc=await res.json()
                        })
                        await fetch('http://localhost:8081/moy7')
                        .then(async function(res){
                            vtm=await res.json()
                        })
    
                        sec=scc['data'][0]['stock_sec']
                        vtm1=vtm['data'][0]['vente_moyen']
                        var pc=vtm1*delai
                        s=q['data'][0]['sum(quanti)']
                        chart.data.datasets.forEach(element => {
                            if(element.label=='stock'){
                                element.data=[78951,50314,95463,23669,57861,43125]
                                element.data.push(q['data'][0]['sum(qua)'])
                            }
                        });
                        chart.data.datasets.forEach(element => {
                            if(element.label=='Stock de sécurité'){
                                element.data=[sec,sec,sec,sec,sec,sec,sec]
                            }
                        });
                        chart.data.datasets.forEach(element => {
                            if(element.label=='Point de commande'){
                                element.data=[pc,pc,pc,pc,pc,pc,pc]
                            }
                        });
                      chart.update();
                    }
                    ca6();
            break;
            default:null;break;
        }
    })
 
 val3.addEventListener("input",(e)=>{
         jours=parseInt(e.target.value);   
    });
 
   
 
 const bt=document.querySelector(".btn");
 bt.addEventListener("click",(e)=>{
     setTimeout(()=>
 {
     location.replace('http://localhost:8081/static/login.html');},1200);
 
 })

function parCat(cat,data) {
    switch (cat) {
        case "1":
            fetch('http://localhost:8081/cat1')
            .then(res=>res.json())
            .then(data=>quantite(data))
            break;
    
        default:
            break;
    }
}

function quantite(data) {
    var categor=0;
    console.log(data)
    for (const key in data) {
        console.log(data[key][0]['sum(quanti)'])
        console.log(data[key]);
        categor+=data[key][0]['sum(quanti)']
    }
    return categor
}













