// Un grand classique des jeux de société ! Ce jeu se joue avec un joueur qui choisit une combinaison de couleur 
// et un autre joueur qui doit deviner ces couleurs et dans quel ordre. Un codemaker et un codebreaker. 
// A chaque tour, le codebreaker doit faire une proposition, le codemaker doit lui répondre en indiquant le nombre 
// de couleurs bien placées et le nombre de bonne couleur mais mal placées.

// 1. Nous imposerons la combinaison à deviner. Elle doit être composée de 2 pions de couleurs différentes.
// Le joueur a donc 12 essais pour trouver la bonne combinaison. // 4 choix de couleurs possibles.
// Vous devez écrire au moins 3 fonctions pour gérer :
// Si la proposition est bien composée uniquement par les 4 couleurs possibles et rien d’autre
// Une fonction qui retourne true ou false si la bonne combinaison est trouvée ou non
// Une fonction qui gère la partie (continuer tant que/fin si gagné)


// const verificationRegles = () => {
//     return (proposition[0]==="blue" || proposition[0]==="yellow" || proposition[0]==="green" || proposition[0]==="red") && (proposition[1]==="blue" || proposition[1]==="yellow" || proposition[1]==="green" || proposition[1]==="red")
// }
// console.log(verificationRegles(proposition))


// fct pour savoir si la proposition est bien composée uniquement par les 4 couleurs possibles et rien d’autre
const couleursPossibles = ['yellow', 'blue', 'red', 'green']
const codeSecret = ['yellow', 'blue']
const proposition = ['red', 'green']

const isCouleurValide = (jeton) => {
    return couleursPossibles.includes(jeton)
}

const isVerificationRegles = () => {
    return ((isCouleurValide(proposition[0]) === true) && (isCouleurValide(proposition[1]) === true) && (proposition[0] !== proposition[1]))
}

console.log(isVerificationRegles())

// Une fonction qui retourne true ou false si la bonne combinaison est trouvée ou non
const isBonneCombinaison = () => {
    return ((proposition[0] === codeSecret[0]) && (proposition[1] === codeSecret[1]))
}

console.log(isBonneCombinaison())

// Une fonction qui gère la partie (continuer tant que/fin si gagné)
const gestionPartie = () => {
    while ((isVerificationRegles() === false) || (isBonneCombinaison() === false)) {
        return console.log("Rejouez")
    }
    return console.log("Vous avez gagné !")
}
gestionPartie()

// 2. Gardons la même logique mais cette fois-ci nous aurons une combinaison de 4 couleurs différentes et un choix de 8 couleurs possibles.
const couleursPossibles8 = ['yellow', 'blue', 'red', 'green', 'orange', 'purple', 'black', 'white']
const codeSecret4 = ['yellow', 'blue', 'black', 'white']
const proposition4 = ['red', 'green', 'black', 'white']

const isCouleurValide2 = (jeton) => {
    return couleursPossibles8.includes(jeton)
}

const isVerificationRegles2 = () => {
    return ((isCouleurValide2(proposition4[0]) === true) && (isCouleurValide2(proposition4[1]) === true) && (isCouleurValide2(proposition4[2]) === true) && (isCouleurValide2(proposition4[3]) === true) && (proposition4[0] !== proposition4[1]) && (proposition4[0] !== proposition4[2]) && (proposition4[0] !== proposition4[3]) && (proposition4[1] !== proposition4[2]) && (proposition4[1] !== proposition4[3]) && (proposition4[2] !== proposition4[3]))
}
console.log(isVerificationRegles2())

const isBonneCombinaison2 = () => {
    return ((proposition4[0] === codeSecret4[0]) && (proposition4[1] === codeSecret4[1]) && (proposition4[2] === codeSecret4[2]) && (proposition4[3] === codeSecret4[3]))
}
console.log(isBonneCombinaison2())

const gestionPartie2 = () => {
    while ((isVerificationRegles2() === false) || (isBonneCombinaison2() === false)) {
        return console.log("Rejouez")
    }
    return console.log("Vous avez gagné !")
}
gestionPartie2()

// 3. Maintenant, la combinaison à deviner peut avoir plusieurs fois la même couleur.
const isVerificationRegles3 = () => {
    return ((isCouleurValide2(proposition4[0]) === true) && (isCouleurValide2(proposition4[1]) === true) && (isCouleurValide2(proposition4[2]) === true) && (isCouleurValide2(proposition4[3]) === true))
}
console.log(isVerificationRegles3())

const gestionPartie3 = () => {
    while ((isVerificationRegles3() === false) || (isBonneCombinaison2() === false)) {
        return console.log("Rejouez")
    }
    return console.log("Vous avez gagné !")
}
gestionPartie3()

// 4. Désormais, ce n’est plus nous mais l’ordinateur qui va proposer une combinaison à deviner. 
// À vous de trouver comment générer de manière aléatoire ce code.

const couleurRandom = () => {
    return couleursPossibles8[Math.floor(Math.random() * couleursPossibles8.length)];
}
console.log(couleurRandom())

// const propositionCombinaison = () => {
const random = () => {
    let propositionRandom = [];
    for (let i = 0; i < 4; i++) {
        let couleurAlea = couleurRandom();
        propositionRandom.push(couleurAlea)
    }
    return propositionRandom
}
console.log(random())

// 5. Proposer une interface graphique pour que l’on puisse voir visuellement les couleurs et
// jouer à votre jeu de manière plus ludique !
// -> voir PROJET PERSO