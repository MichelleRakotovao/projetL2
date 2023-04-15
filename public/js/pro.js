window.addEventListener('keydown',e=>{
    if ( searchBar.value=='' && e.key==='Backspace') {
        window.history.back();
        console.log(e.key);
    }
    console.log(e.key);
})
/*function create(els) { return document.createElement(els) };
const listeObjet = [{
    Marque: "",
    Modele: "",
    poster: '../public/images/coca.jpg',
    prix: '',
    plot: '',
    awards: '',
    type:"ALIMENTATION"
},
{
    Marque: "EAU VIVE",
    Modele: "PM & GM",
    poster: '../public/images/qrcode.png',
    prix: '700/1500',
    plot: 'Matricule:1003',
    awards: 'ALIMENTATION',
    type:"ALIMENTATION"
},{
    Marque: "APOLO",
    Modele: "Unique",
    poster: '../public/images/pate.jpg',
    prix: '2000',
    plot: 'Matricule:101',
    awards: 'ALIMENTATION',
    type:"ALIMENTATION"
},
{
    Marque: "GEL DOUCHE",
    Modele: "PM/GM",
    poster: '../public/images/gel.png',
    prix: '6500-10500',
    plot: 'Matricule:100',
    awards: 'COSMETICS',
    type:"COSMETICS"
},{
    Marque: "SAVON",
    Modele: "Unique",
    poster: '../public/images/savon.jpg',
    prix: '4000-7000',
    plot: 'Matricule:120',
    awards: 'COSMETICS',
    type:"COSMETICS"
},
{
    Marque: "DEODORANT",
    Modele: "Choix multiples",
    poster: '../public/images/deo.jpg',
    prix: '10000-17500',
    plot: 'Matricule:150',
    awards: 'COSMETICS',
    type:"COSMETICS"
},{
    Marque: "COUCHE BEBE",
    Modele: "Size 1-5",
    poster: '../public/images/couche.png',
    prix: '25000-39500',
    plot: 'Matricule:50',
    awards: 'BEBE',
    type:"BEBE"
},
{
    Marque: "BAVOIR",
    Modele: "S-XL",
    poster: '../public/images/bavoir.jpg',
    prix: '15000-20000',
    plot: 'Matricule:209',
    awards: 'BEBE',
    type:"BEBE"
},
{
    Marque: "FARILAC",
    Modele: "Unique",
    poster: '../public/images/farilac.jpg',
    prix: '5000-15000',
    plot: 'Matricule:208',
    awards: 'BEBE',
    type:"BEBE"
},
{
    Marque: "ASPIRATEUR",
    Modele: "Taille moyen",
    poster: '../public/images/aspirateur.jpg',
    prix: '120000-180000',
    plot: 'Matricule:400',
    awards: 'ELECTROMENAGERS',
    type:"ELECTROMENAGERS"
},
{
    Marque: "FRIGO",
    Modele: "320D",
    poster: '../public/images/frigo.jpg',
    prix: '1.500.000',
    plot: 'Matricule:420',
    awards: 'ELECTROMENAGERS',
    type:"ELECTROMENAGERS"
},
{
    Marque: "MACHINE A LAVER",
    Modele: "330",
    poster: '../public/images/machine.jpg',
    prix: '4.000.000',
    plot: 'Matricule:450',
    awards: 'ELECTROMENAGERS',
    type:"ELECTROMENAGERS"
},{
    Marque: "SAC A DOS",
    Modele: "Pink",
    poster: '../public/images/sac.jpg',
    prix: '55000',
    plot: 'Matricule:1026',
    awards: 'FOURNITURES',
    type:"FOURNITURES"
},
{
    Marque: "SURLIGNEUR",
    Modele: "Multicouleur",
    poster: '../public/images/surligneur.jpg',
    prix: '2000-5000',
    plot: 'Matricule:1120',
    awards: 'FOURNITURES',
    type:"FOURNITURES"
},
{
    Marque: "TROUSSE",
    Modele: "Blue",
    poster: '../public/images/trousse.jpg',
    prix: '1990',
    plot: 'Matricule:510',
    awards: 'FOURNITURES',
    type:"FOURNITURES"
},{
    Marque: "BALLON DE BASKET",
    Modele: "NBA",
    poster: '../public/images/basket.jpg',
    prix: '10500',
    plot: 'Matricule:2010',
    awards: 'SPORT',
    type:"SPORT"
},
{
    Marque: "CORDE A SAUTER",
    Modele: "Longueur max",
    poster: "../public/images/corde.jpg",
    prix: '7500',
    plot: 'Matricule:67',
    awards: 'SPORT',
    type:"SPORT"
},
{
    Marque: "BOULE DE PETANQUE",
    Modele: "Aluminium",
    poster: "../public/images/pétanque.jpg",
    prix: '8650',
    plot: 'Matricule:1200',
    awards: 'SPORT',
    type:"SPORT"
},
{
    Marque: "SOPALIN",
    Modele: "XL",
    poster: "../public/images/sopalin.jpg",
    prix: '6500-12500',
    plot: 'Matricule:800',
    awards: 'MAISON',
    type:"MAISON"
},{
    Marque: "PQ",
    Modele: "Utra-doux",
    poster: "../public/images/pq.jpg",
    prix: '12000',
    plot: 'Matricule:9240',
    awards: 'MAISON',
    type:"MAISON"
},
{
    Marque: "LIQUIDE VAISSELLE",
    Modele: "Ultra moussant",
    poster: "../public/images/vaisselle.jpg",
    prix: '10000',
    plot: 'Matricule:109',
    awards: 'MAISON',
    type:"MAISON"
},
{
    Marque: "NIVEA",
    Modele: "Gamme",
    poster: "../public/images/nivea.png",
    prix: '75000-120000',
    plot: 'Matricule:1424',
    awards: 'COSMETICS',
    type:"COSMETICS"
},
{
    Marque: "PARFUM",
    Modele: "Louis Vouitton",
    poster: "../public/images/parfum.jpg",
    prix: '200000-500000',
    plot: 'Matricule:1526',
    awards: 'COSMETICS',
    type:"COSMETICS"
},{
    Marque: "ULTRA DOUX",
    Modele: "Gamme",
    poster: "../public/images/ultradoux.jpg",
    prix: '65000-100000',
    plot: 'Matricule:5500',
    awards: 'COSMETICS',
    type:"COSMETICS"
},
{
    Marque: "CROISSANT",
    Modele: "Moelleux",
    poster: "../public/images/croissant.jpg",
    prix: '5500',
    plot: 'Matricule:482',
    awards: 'ALIMENTATION',
    type:"ALIMENTATION"
},
{
    Marque: "LAIT",
    Modele: "Entier",
    poster: "../public/images/lait.png",
    prix: '4500',
    plot: 'Matricule:9910',
    awards: 'ALIMENTATION',
    type:"ALIMENTATION"
},
{
    Marque: "OEUF",
    Modele: "Detail",
    poster: "../public/images/oeuf.jpg",
    prix: '400-700',
    plot: 'Matricule:789',
    awards: 'ALIMENTATION',
    type:"ALIMENTATION"
},{
    Marque: "VIN",
    Modele: "Sucré",
    poster: "../public/images/vin.jpg",
    prix: '200000-650000',
    plot: 'Matricule:1596',
    awards: 'ALIMENTATION',
    type:"ALIMENTATION"
},
{
    Marque: "CLASSEUR",
    Modele: "Couleur",
    poster: "../public/images/classeur.jpg",
    prix: '20000',
    plot: 'Matricule:7800',
    awards: 'FOURNITURES',
    type:"FOURNITURES"
},
{
    Marque: "LINGETTE",
    Modele: "Cotton",
    poster: "../public/images/lingette.jpg",
    prix: '15000',
    plot: 'Matricule:200',
    awards: 'BEBE',
    type:"BEBE"
},
{
    Marque: "TELEVISION",
    Modele: "Ecran Plat",
    poster: "../public/images/tele.jpg",
    prix: '1500000-3400000',
    plot: 'Matricule:3210',
    awards: 'ELECTROMENAGERS',
    type:"ELECTROMENAGERS"
},
{
    Marque: "CHOCOLAT",
    Modele: "Robert",
    poster: "../public/images/chocolat.jpg",
    prix: '25000-55000',
    plot: 'Matricule:1749',
    awards: 'ALIMENTATION',
    type:"ALIMENTATION"
},{
    Marque: "RASOIR",
    Modele: "Hommes-Femmes",
    poster: "../public/images/rasoir.jpg",
    prix: '25000-35000',
    plot: 'Matricule:1020',
    awards: 'COSMETICS',
    type:"COSMETICS"
}]
const searchBar=document.getElementById('search');
const searchList = document.getElementById('result-list');
const all=document.getElementById('list');
searchBar.addEventListener('keyup',(e)=>{
    let list=document.querySelectorAll('.list-item')
    const mot=searchBar.value;
        if (mot.length>2) {
                for (let i = 0; i < listeObjet.length; i++) {
                    if ( listeObjet[i].Marque.toLowerCase().includes(mot)) {
                    let div = create('div');
                    searchList.classList.remove("hide");
                    list[i].classList.add("hide");  
                    div.id = "search-list-item";
                    let divi = create('div');
                    divi.id = "search-item-thumbnail";
                    let divo = create('div');
                    divo.id = "search-time-info";
                    let image = create('img');
                    let h = create('p');
                    p = create('p')
        
                    image.src = listeObjet[i].poster;
                    h.innerHTML = listeObjet[i].Marque;
        
                    searchList.appendChild(div);
                    div.appendChild(divo)
                    div.appendChild(divi);
                    divo.appendChild(image);
                    divi.appendChild(h);
                    divi.appendChild(p);
                    p.innerHTML = listeObjet[i].Modele;
                    p.style.color = "#ffffff"
                    image.style.width = "50px"
                    div.addEventListener('click',()=>{
                        searchList.innerHTML=''
                        list[i].classList.remove("hide");
                     })
                   }else if(e.key==="Backspace"){
                    searchList.innerHTML='';
                    list[i].classList.remove("hide")
                   } else if((e.key==="Enter") ){
                        searchList.innerHTML=''
                        for (let j = 0; j < listeObjet.length; j++) {
                            if (mot===listeObjet[j].Marque.toLowerCase()) {
                                list[j].classList.remove("hide");
                                searchList.innerHTML=''
                            }
                            
                        }
                   }else{
                        list[i].classList.add("hide");
                    }
                }
         }
       
        
    })    
    for (const i of listeObjet) {
        let cadre=document.createElement("div");
        cadre.classList.add("list-item",i.type,"hide");
        let docim=document.createElement('div');
        let dTitre=document.createElement('div');
        let titre=document.createElement('h1');
        let prix=document.createElement('p')
        let modele=document.createElement('p');
        let awards=document.createElement('p')
        let plot=document.createElement('p');
        titre.innerHTML=i.Marque;
        modele.innerHTML=i.Modele;
        awards.innerHTML=i.awards;
        awards.style.color='red'
        plot.innerHTML=i.plot;
        prix.innerHTML=i.prix + ' AR';
        dTitre.id='info';
        docim.id="photo"
        let imag=document.createElement('img');
        imag.id='img'
        imag.setAttribute("src",i.poster);
        docim.appendChild(imag);
        dTitre.appendChild(titre)
        dTitre.appendChild(modele);
        dTitre.appendChild(prix)
        dTitre.appendChild(plot)
        dTitre.appendChild(awards)
        cadre.appendChild(docim)
        cadre.appendChild(dTitre);
        all.appendChild(cadre);
    }
    function filtre(valeur) {
        let elements=document.querySelectorAll('.list-item')
        elements.forEach(els=>{
            if(valeur=="tout"){
                els.classList.remove("hide");
            }else{
                if (els.classList.contains(valeur)) {
                    els.classList.remove("hide")
                }else{
                    els.classList.add('hide')
                }

            }
        })
        
    }
    window.onload=()=>{ 
        filtre("tout")
    }
   /* filtreEls("tout");
    function filtreEls(c){
        var x, i;
        if(c == "tout") c = "";
        for(i=0; i < x.length; i++){
            removeClass(x[i], "tout");
            if(x[i].className.indexOf(c) > -1) addClass(x[i], "tout")
        }
    }
    function addClass(element, name){
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for(i = 0; i < arr2.length; i++){
            if(arr1.indexOf(arr2[i]) == -1){
                element.className += " " + arr2[i];
            }
        }

    }

    function removeClass(element, name){
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i=0; i < arr2.length; i++){
            while(arr1.indexOf(arr2[i]) > -1 ){
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }*/

    one.addEventListener("click",()=>{
        function fetchRequest(formData, file) {
            //infoText.innerText = "Scan du QR Code...";
                fetch("http://api.qrserver.com/v1/read-qr-code/", {
                method: "POST", body: formData
            }).then(res => res.json()).then(result => {
                 result = result[0].symbol[0].data;
                 infoText.innerText =  result;
                 if(!result) return;
                 wrapper.querySelector("textarea").innerText = result; 
                form.querySelector("img");  
                wrapper.classList.add("active");
               
               
               //if(!result) return;
               
            });
        }
    })
    const bt=document.querySelector(".btn");
    bt.addEventListener("click",(e)=>{
        setTimeout(()=>
    {
        location.replace('http://localhost:8081/static/login.html');},1200);
    
    })