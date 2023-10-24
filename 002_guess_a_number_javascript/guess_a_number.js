// 1. Créer une fonction qui demande à l’utilisateur à l’aide d’un prompteur, un nombre.
// Stocker sa réponse dans une variable de type adéquate nommée givenNumber.
const donneUnNombre = () => {
    let givenNumber = parseInt(prompt('Donne moi un nombre'))
}
donneUnNombre()

//2. Pour le moment nous allons considérer que le nombre à deviner est 22.
// Écrire une fonction qui prend en paramètre givenNumber et qui se nommera didIWin
// Si le nombre est < 22, on affichera à l’utilisateur “Plus grand”.
// Si le nombre est > 22 on affichera à l’utilisateur “Plus petit”.
// Si le nombre est 22 on affichera “Bravo ! Vous avez deviné le nombre”.
// Attention : le prompt() bloque l’exécution de la page de la page : pour afficher des informations à la suite d’un prompt(), utilisez alert().
// Créer une fonction gamePlay qui gérera vos appels de fonctions et la transmission de votre variable d’une fonction à une autre.
const gamePlay = () => {
    let givenNumber = parseInt(prompt('Donne moi un nombre'));
    didIWin(givenNumber)
}

const didIWin = (givenNumber) => {
    if (givenNumber < 22) {
        alert('Plus grand')
    }
    if (givenNumber > 22) {
        alert('Plus petit')
    }
    if (givenNumber === 22) {
        alert('Bravo ! Vous avez deviné le nombre')
    }
}

gamePlay()


//3. Désormais la fonction didIWin devra retourner true si l’utilisateur a trouvé le chiffre, false sinon.
// Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. 
// En revanche, si elle a retourné false, on redemande un chiffre à l’utilisateur.
const gamePlay = () => {
    let givenNumber = parseInt(prompt('Donne moi un nombre'));
    if (didIWin(givenNumber) === true) {
        alert('Bravo ! Vous avez deviné le nombre')
    }
    if (didIWin(givenNumber) === false) {
        gamePlay()
    }
}

const didIWin = (givenNumber) => {
    if (givenNumber === 22) {
        return true
    }
    if (givenNumber !== 22) {
        return false
    }
}

gamePlay()


//4. Maintenant on va considérer que l’on a pas un seul joueur mais 2.
// Créer une fonction qui demande au joueur 1 de fournir un nombre à deviner compris entre 0 et 50 tant qu’il ne respecte pas ce range.
// La fonction didIWin doit prendre désormais un autre paramètre, le nombre à deviner.
// Reprenez la logique 1, 2 et 3 pour gérer la partie et lui indiquer s’il doit continuer à jouer ou s’il a gagné.   
let cible = 0;

const joueur1 = () => {
    cible = parseInt(prompt('Donne moi un nombre compris entre 0 et 50'));
    if ((cible < 0) || (cible > 50)) {
        joueur1()
    }
    else {
        gamePlay()
    }
}

const gamePlay = () => {
    let givenNumber = parseInt(prompt('Devine le nombre compris entre 0 et 50'));
    if (didIWin(givenNumber, cible) === true) {
        alert('Bravo ! Vous avez deviné le nombre')
    }
    if (didIWin(givenNumber, cible) === false) {
        gamePlay();
    }
}

const didIWin = (givenNumber, cible) => {
    if (givenNumber === cible) {
        return true
    }
    if (givenNumber !== cible) {
        return false
    }
}

joueur1()


//5. Afficher le range (0-50) auquel notre utilisateur à le droit autour du champ.
// Si l’utilisateur a gagné nous effacerons tout pour afficher notre message de bravo !
// En revanche, tant que l’utilisateur n’a pas trouvé le bon chiffre, on affichera le nombre de tentatives en cours sur la partie.
// Ajouter un champ input qui permet à l’utilisateur de rentrer sa proposition de nombre directement dans un champ sur la page avec un bouton valider.
let cible = 0;

const joueur1 = () => {
    cible = parseInt(document.getElementById(cible - input).value);
    if ((cible < 0) || (cible > 50)) {
        document.getElementById("message").innerHTML = "La valeur saisie n'est pas un nombre entre 0 et 50"
    }
    else {
    }
}

let counter = 0;

const gamePlay = () => {
    // let givenNumber = parseInt(prompt('Devine le nombre compris entre 0 et 50'));
    let givenNumber = document.querySelector('input').value;
    console.log(givenNumber);
    if (didIWin(givenNumber, cible) === true) {
        alert('Bravo ! Vous avez deviné le nombre')
    }
    if (didIWin(givenNumber, cible) === false) {
        counter++;
        document.querySelector('p').innerHTML = `${counter} tentatives`;
        // gamePlay();
    }
}

const didIWin = (givenNumber, cible) => {
    if (givenNumber === cible) {
        document.getElementById("message").innerHTML = "Bravo c'est gagnée";
    }
    if (givenNumber < cible) {
        document.getElementById("message").innerHTML = "Plus grand";
    }
    if (givenNumber > cible) {
        document.getElementById("message").innerHTML = "Plus petit";
    }
}

// 6. Si le nombre proposé par l’utilisateur est plus petit que le nombre à deviner, alors vous changerez le range minimal.
// Ce ne sera plus 10 mais le dernier nombre proposé.
// Même chose si le nombre est supérieur.
