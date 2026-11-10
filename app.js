function kepkatt(kepId, id){
    let kepek = document.querySelectorAll(".lehetosegek img")
    kepek.forEach(kep => {kep.style.border = ""})
    let kep = document.getElementById(id);
    kep.style.border = "5px solid red";
    let random = Math.floor(Math.random() * 3) + 1;
    
}