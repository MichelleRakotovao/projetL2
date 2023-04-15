var ctx = document.querySelector('#des');
var val1=document.querySelector("#vm");
var val2=document.querySelector("#jds");
var val3=document.querySelector("#pc");
var v=document.getElementById('vm');
var err=document.querySelector('#err');
var venteMoyenne=0;
var delai='';
var jours='';
var stock='';
var pc=0;
var btn=document.querySelector("#ok");
val2.addEventListener("input",(e)=>{
    if ((parseInt(e.target.value))<0 || parseInt(e.target.value)>30) {
        val2.classList.add('error');
        err.classList.add('error')
        err.textContent="Veuillez entre un chiffre entre 1 et 30"
      } else{
      val2.classList.remove('error');
      err.textContent="";
       delai=parseInt(e.target.value);
    }
   });
   val3.addEventListener("input",(e)=>{
    if ((parseInt(e.target.value))<0 || parseInt(e.target.value)>30) {
        val3.classList.add('error');
        err.classList.add('error')
        err.textContent="Veuillez entre un chiffre entre 1 et 30"
      }else{
        val3.classList.remove('error');
        err.textContent="";
          jours=parseInt(e.target.value);
      }
       
   });
   var vente=''
   v.addEventListener('input',(e)=>{
     vente=parseInt(e.target.value);
   });


   btn.addEventListener('click',(e)=>{
     e.preventDefault();
    stock=vente*jours;
    pc=vente*delai;
console.log(vente);
console.log(stock);
console.log(jours)
console.log(vente*jours);
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janvier ', 'Fevrier', 'Mars', 'Avril', 'Mai'],
        datasets: [{
            label: "stock",
            backgroundColor: 'rgb(255 ,99 ,132, 0.25)',
            borderColor: 'rgb(255 ,99 ,132, 0.25)',
            // data: [100,200,400,800,1000],
            data: [234,786,123,786,222],
            tension: 0,
            pointStyle: 'line'
        },
        {
            label: 'Safety stock',
            data:[stock,stock,stock,stock,stock],
            backgroundColor: 'rgb(228, 2, 21, 0.25)',
            pointStyle: 'line'
        }, {
            label: 'command point',
            data: [12,13,14,15,16],
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
   
 
})

const bt=document.querySelector(".btn");
bt.addEventListener("click",(e)=>{
    setTimeout(()=>
{
    location.replace('http://localhost:8081/static/login.html');},1200);

})
