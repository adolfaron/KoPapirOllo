let jatekosPont = 0;
let gepPont = 0;
let gepMutat = "img/ures.png";
let eredmeny = "Válassz!";
let nev;
let emailCim;

document.addEventListener("DOMContentLoaded", () => {
    if(nev == null || emailCim == null){
        document.getElementById("app").style.display = "none";
    }
})

function belepes(){
    emailCim = document.getElementById("emailBe").value;
    nev = document.getElementById("nevBe").value;
    if (emailCim == "" || nev == ""){
        alert("hibás adatok")
    }
    document.getElementById("app").style.display = "";
}

function kepkatt(kepId, id){
    let kepek = document.querySelectorAll(".lehetosegek img")
    kepek.forEach(kep => {kep.style.border = ""})
    let kep = document.getElementById(id);
    kep.style.border = "5px solid red";
    let random = Math.floor(Math.random() * 3) + 1;
    gepMutat = ["img/ko.png", "img/papir.png", "img/ollo.png"][random-1]
    if(kepId == random){
        eredmeny = "Döntetlen!";
    }
    else if((kepId == 1 && random == 3) || (kepId == 2 && random == 1) || (kepId == 3 && random == 2)){
        eredmeny = "Nyertél!";
        jatekosPont++;
    }
    else {
        eredmeny = "Vesztettél!";
        gepPont++;
    } 
    frissit()
    
    
    
}

const app = Vue.createApp({
    data() {
        return {
            jatekosPont: jatekosPont,
            gepPont: gepPont,
            gepMutat: gepMutat,
            eredmeny: eredmeny,
            nev: nev
        }
    },
});

const vm = app.mount("#app");

function frissit() {
    Object.assign(vm, {
        jatekosPont,
        gepPont,
        gepMutat,
        eredmeny,
        nev
    });
}