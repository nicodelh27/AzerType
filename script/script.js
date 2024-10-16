

function lancerJeu(){
    let score = 0;
    let listePropositions = listeMots;
    let i = 0;

    let boutonValider = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");

    afficherProposition(listePropositions[i]);

    boutonValider.addEventListener("click", () => {
        if (inputEcriture.value === listePropositions[i]){
            score++;
        }

        i++;
        if (i<listePropositions.length){
            afficherProposition(listePropositions[i]);
        } else {
            boutonValider.disabled = true;
            afficherProposition("Fin du jeu");
        }
        afficherResultat(score, i);
        inputEcriture.value = "";
    })


    for(let index = 0; index<boutonsRadio.length; index++) {
        boutonsRadio[index].addEventListener("change", (event) => {
            if (event.target.value === "1"){
                    listePropositions = listeMots;
            } else {
                    listePropositions = listePhrases;
            }

            afficherProposition(listePropositions[i]);
        })
    }

    let form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let nom = document.getElementById("nom").value;
        let email = document.getElementById("email").value;

        if(!validerNom(nom)){
            console.log("Le nom n'est pas valide");
        }else if(!validerMail(email)){
            console.log("L'email n'est pas valide");
        } else {
            afficherEmail(nom, email, score);
        }
    })

    let inputNom = document.getElementById("nom");
    let inputMail = document.getElementById("email");

    inputNom.addEventListener("input", (event) => {
        let champErreurNom = document.querySelector("#erreurNom");
        if(validerNom(event.target.value)){
            champErreurNom.textContent = "";
        } else {
            champErreurNom.textContent = "Le nom n'est pas valide";
        }
    })

    inputMail.addEventListener("input", (event) => {
        let champErreurMail = document.querySelector("#erreurMail");
        if(validerMail(event.target.value)){
            champErreurMail.textContent = "";
        } else {
            champErreurMail.textContent = "L'email n'est pas valide";
        }
    })
}

function afficherProposition(proposition){
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.textContent = proposition;
}
/*
function lancerBoucleDeJeu (listeMots){
    let score = 0;
    for (let i = 0; i<listeMots.length; i++){
        let motUtilisateur = prompt("Entrez le mot ou la phrase suivante : " + listeMots[i])

        if (motUtilisateur === listeMots[i]){
            score++;
        }
    }
    return score;
}
*/
function afficherResultat(score, nbMots){
    zoneScore.textContent = `${score}/${nbMots}`;
}

function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function validerNom(nom){
    let regex = new RegExp("^[a-zA-Z]+$");
    return regex.test(nom);
}

function validerMail(mail){
    let regex = new RegExp("^[a-z0-9._-]+@[a-z0-9.-]+\\.[a-z]+$");
    return regex.test(mail);
}