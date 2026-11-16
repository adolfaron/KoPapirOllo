let jatekosPont = 0;
let gepPont = 0;
let gepMutat = "img/ures.png";
let eredmeny = "Válassz!";
let nev = "asd"; 
let emailCim = "sdf";

document.addEventListener("DOMContentLoaded", () => {
    if(nev == null || emailCim == null){
        document.getElementById("app").style.display = "none";
    }
    else{
        frissit();
        document.getElementById("form").style.display = "none";
    }

})

function belepes(){
    emailCim = document.getElementById("emailBe").value;
    nev = document.getElementById("nevBe").value;
    if (emailCim == "" || nev == ""){
        console.log("rossz név")
        alert("hibás adatok");
        return;
    }
    
    if (!/^\p{L}+$/u.test(nev)){
        console.log("nem csak betű")
        alert("A névba csak betűk lehetnek!");
        return
    }
    if (nev.length < 8 || nev.length > 20){
        console.log("rossz név hossz")
        alert("nem megfelelő hosszúságú név (8-20)")
        return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]/.test(emailCim)){
        console.log("Rossz e-mail");
        return
    }
    document.getElementById("app").style.display = "";
    frissit();
    document.getElementById("form").style.display = "none";
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
    let ujrakezd = document.getElementById("ujrakezd")
    if (jatekosPont >= 10){
        eredmeny = nev+"nyerte a játékot!";
        ujrakezd.style.display = "block";
    }
    else if(gepPont >= 10){
        eredmeny = "A gép nyerte a jáátékot!";
        ujrakezd.style.display = "block";
    }
    frissit()
}

function ujrakezd(){
    jatekosPont = 0;
    gepPont = 0;
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