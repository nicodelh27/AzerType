let inputEcriture = document.getElementById("inputEcriture");
let btnValiderMot = document.getElementById("btnValiderMot");

let zoneProposition = document.querySelector(".zoneProposition");
let zoneScore = document.querySelector(".zoneScore span");

let boutonsRadio = document.querySelectorAll(".optionSource input")


console.log(inputEcriture)
console.log(btnValiderMot)
console.log(zoneProposition)
console.log(zoneScore)
console.log(boutonsRadio)

initAddEventListenerPopup();
lancerJeu();