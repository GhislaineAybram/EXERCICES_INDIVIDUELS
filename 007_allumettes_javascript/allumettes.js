// principe du jeu des allumettes : au départ, il y a un tas de 50 allumettes. Chacun à son tour, les deux joueurs 
// ôtent obligatoirement entre 1 et 6 allumettes. Celui qui ôte la dernière allumette gagne.

// 1. Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.

let button = document.getElementById('button');
let matchesLeft = 50;
// let isPlayerOneTurn = true;
let actualPlayer = 1;
let numberOfPlayers = parseInt(prompt("Quel est le nombre de joueurs ?"));

document.querySelector("#player").innerHTML = `player ${actualPlayer}`
button.addEventListener('click', () => {
    let matchesToRemove = document.getElementById("number").value;
    // étape 3
    if (matchesToRemove > 6 || matchesToRemove < 1) {
        alert("nombre incorrect")
    }
    else {
        let remainingMatches = removeMatches(matchesToRemove);
        // étape 2
        if (remainingMatches > 0) {
            document.querySelector("#result").innerHTML = `${remainingMatches} allumettes restantes`;
            // changePlayer();
            actualPlayer = changePlayerMultiple(actualPlayer, numberOfPlayers);
            document.querySelector("#player").innerHTML = `player ${actualPlayer}`;
        }
        else {
            document.querySelector("#result").innerHTML = `partie terminée`
        }
    }
})
const removeMatches = (matchesToRemove) => {
    matchesLeft -= matchesToRemove;
    return matchesLeft
}

// version pour 2 joueurs
const changePlayer = () => {
    if (isPlayerOneTurn === true) {
        isPlayerOneTurn = false;
        document.querySelector("#player").innerHTML = `player 2`
    }
    else {
        isPlayerOneTurn = true;
        document.querySelector("#player").innerHTML = `player 1`
    }
}

// version pour plusieurs joueurs
const changePlayerMultiple = (actualPlayer, numberOfPlayers) => {
    if (actualPlayer < numberOfPlayers) {
        actualPlayer += 1;
    }
    else {
        actualPlayer = 1;
    }
    return actualPlayer;
}

// 2. Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas.
// Pour rappel, on a 50 allumettes au départ.

// 3. Limiter le nombre d’allumettes à pouvoir être retirées de 1 à 6.
// Ajouter a votre jeu la notion de victoire.

// 4. Rajouter un 2eme joueur à votre jeu.

// 5. Proposer un mode multi-joueur. Demander à l’utilisateur, combien il y a de joueur et gérer la partie en conséquence.

// 6. Libre à vous de faire une interface graphique à votre goût !

