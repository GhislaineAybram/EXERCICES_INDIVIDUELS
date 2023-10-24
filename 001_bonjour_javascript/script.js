// 1. Étape 1: L’heure des présentations
// utilisez la fonction prompt() pour demander son nom à l’utilisateur.ice
// Créer une variable de texte dans laquelle vous utiliserez la concaténation 
// pour stocker la chaine de caractère “👋 Bonjour” suivi du nom saisi par l’utilisateur.ice.
// Ajouter un element h2 dans le corps de la page HTML qui entoure la chaine de caractères stockée.

function askName() {
    let messageBienvenue = `👋 Bonjour ` + prompt("Quel est votre nom ?");
    document.body.innerHTML += '<h2> <span id="nom"></span> </h2>';
    document.getElementById('nom').innerHTML = messageBienvenue;
}

// document.body.innerHTML += '<h2> ${messageBienvenue} </h2>';

// 2. Étape 2: Faisons connaissance
// Créer une variable qui contient l’age de l’utilisateur.ice, calculé à partir de son année de naissance et de l’année en cours.
// Sur la page HTML, ajouter un élément h3 qui affiche “Vous avez ” suivi de l’age calculé précédemment suivi de “ans”.

// 3. Étape bonus: Soyons précis, voulez-vous ?
// Pour plus de précisions sur l’âge de notre utilisateur.ice, demandez-lui également son mois de naissance 
// et prenez-le en compte dans le calcul.

function askBirthYear() {
    let anneeNaissance = prompt("Quelle est votre année de naissance ?");
    let moisNaissance = prompt("Quelle est votre mois de naissance ?");
    let anneeEnCours = new Date().getFullYear();
    let moisEnCours = new Date().getMonth()
    let ageUtilisateur = anneeEnCours - anneeNaissance;
    if (moisNaissance <= moisEnCours) {
        ageUtilisateur = anneeEnCours - anneeNaissance
    }
    else {
        ageUtilisateur = anneeEnCours - anneeNaissance - 1
    }
    document.body.innerHTML += '<h3> <span id="age"></span> </h3>';
    document.getElementById('age').innerHTML = `Vous avez ${ageUtilisateur} ans`;
}

askName()
askBirthYear()


