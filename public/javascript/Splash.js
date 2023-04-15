// Splash
const well=document.getElementById("well");
let mot=["s.Stock","  ","Manager"];
let i=0;
let j=0;
const creation=()=>{
    const letter=document.createElement("span");
    well.appendChild(letter);
    letter.textContent=mot[i][j];
}
const affichage=()=>{
    setTimeout(()=>{
        if(j<mot[i].length){
            creation();
            j++;
            affichage();
        }
        else{
            i++;
            j=0;
            affichage();
        }
    },100);
};
affichage();
setTimeout(()=>
{
    location.replace('http://localhost:8081/static/login.html');},12000);
