async function main(){
    var option = {
        method: "GET"
    }
    
    let states;
    await fetch("http://localhost:8081/static/state.json", option)
    .then(async function(res){
        states = await res.json();
    })
    
    
    
    
    nbr_qte=0;
    stockAlert=57;
    n=4;
    const loko1="#eaebeb";
    const loko2="#4bc5ce";
    const d=new Date()
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
    let labels = []
    for (let i = 0; i < states["cat1"].length; i++) {

        const element = states["cat1"][i].date;
        const qt = states["cat1"][i].qt;
        labels.push(element)
        data.push(qt)
    
    }
    var chart=new Chart(ctx,{
        type:'line',
        data:{
            labels,
            datasets:[{
                label:"Quantité en stock",
                backgroundColor:'#fcb424',  
                data:data,
            }],
        },
        options:{
            responsive:true,
        }
    })  
 
 
    Select.addEventListener('change', (e)=>{
        console.log(chart);
      selectValue=Select.value
      data=[];
      labels = []
      for (let i = 0; i < states[selectValue].length; i++) {
  
          const element = states[selectValue][i].date;
          const qt = states[selectValue][i].qt;
          labels.push(element)
          data.push(qt)
      }

    // chart.data.labels = labels;
    // chart.data.datasets.data = data
    // chart.update();

    for (let i = 0; i < chart.data.labels.length; i++) {
        chart.data.labels = labels
        chart.data.datasets.forEach((dataset) => {
            dataset.data = data;
        });
        chart.update();
    }

      

    })
    
    
}

main()

const bt=document.querySelector(".btn");
bt.addEventListener("click",(e)=>{
    setTimeout(()=>
{
    location.replace('http://localhost:8081/static/login.html');},1200);

})