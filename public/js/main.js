const wrapper = document.querySelector(".wrapper"),
form = wrapper.querySelector("form"),
fileInp = form.querySelector("input"),
infoText = form.querySelector("p"),
closeBtn = wrapper.querySelector(".close");
//copyBtn = wrapper.querySelector(".copy");

function fetchRequest(formData, file) {
    infoText.innerText = "Scan du QR Code...";
        fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: "POST", body: formData
    }).then(res => res.json()).then(result => {
         result = result[0].symbol[0].data;
         infoText.innerText =  result ? "Télécharger le QR Code pour le scan" : "Impossible de scanner cette image, veillez ne télecharger que le qr code";
         if(!result) return;
       //  wrapper.querySelector("textarea").innerText = result; 
        form.querySelector("img").src = URL.createObjectURL(file);  
        wrapper.classList.add("active");
       
       
       //if(!result) return;
       
    });
}

fileInp.addEventListener("change", e => {
    let file = e.target.files[0]; //obtenir le fichier sélectionné par l'utilisateur
    if(!file) return;
    let formData = new FormData(); //creation d'un nouvel objet de données du formulaire
    formData.append("file", file); //ajout du fichier sélectionné aux données du formulaire
    fetchRequest(formData, file);

});

/*copyBtn.addEventListener("click", () =>{
    let text = wrapper.querySelector("textarea").textContent;
    navigator.clipboard.writeText(text);
});*/

form.addEventListener("click", () => fileInp.click());
closeBtn.addEventListener("click", () =>  wrapper.classList.remove("active"));