

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

        console.log(nom, email);

        afficherEmail(nom, email, score);
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