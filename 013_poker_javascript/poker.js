// Écrire une fonction createDeck qui génère un deck de 52 cartes à jouer sous forme d'un tableau 
// de chaines de caractères type "1♠︎" ou "V♣︎". Utiliser une fonction qui mélange automatiquement 
// le tableau de carte (le javascript ne possède pas de fonction shuffle. 
// Chercher un equivalent ou une implementation).

const couleurs = ['♠︎', '♣︎', '♡', '♢']
const valeurs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
let jeuDeCartes = []

const createDeck = () => {
    for (couleur of couleurs) {
        for (valeur of valeurs) {
            jeuDeCartes.push(valeur + couleur)
        }
    }
}
// createDeck()

const shuffleDeck = (jeuDeCartes) => {
    for (let i = jeuDeCartes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [jeuDeCartes[i], jeuDeCartes[j]] = [jeuDeCartes[j], jeuDeCartes[i]];
    }
    return jeuDeCartes
}

// 2. Pour la suite, un deck sera déclaré et stocké dans une constante deck. Écrire une fonction deal qui 
// distribue (et donc retire du deck) un nombre de carte, le nombre doit être donné en paramètre. 
// Créer une variable par joueur. Chaque joueur doit recevoir 2 cartes. Partant sur 2 joueurs, on aura donc :
// const player1 = deal(2)
// const player2 = deal(2)
const deck = shuffleDeck(jeuDeCartes);
// console.log(deck)
const deal = (n) => {
    player = [];
    for (let i = 1; i <= n; i++) {
        player.push(deck[0]);
        deck.shift()
    }
    return player
}
// const player1 = deal(2)
// console.log(player1)
// const player2 = deal(2)
// console.log(player2)

// 3. Écrire une fonction flop qui retournera le flop, c'est à dire les 5 cartes posés au centre du jeu, communes 
// à tous les joueurs. La fonction utilisera la fonction deal et exécutera les tours comme un veritable croupier, 
// en brulant les cartes entre chaque.
// Les tours sont composés de la manière suivante : 
// Premier tour = 1 carte brulés, 3 cartes sorties 
// Deuxième tour = 1 carte brulés, 1 carte sortie 
// Troisième tour = 1 carte brulés, 1 carte sortie
// Cartes tirés seront stockés dans une variable cards
const flop = () => {
    let card = [];
    deal(1);
    card.push(deal(1).toString());
    card.push(deal(1).toString());
    card.push(deal(1).toString());
    deal(1);
    card.push(deal(1).toString());
    deal(1);
    card.push(deal(1).toString());
    return card
}
// const card = flop()
// console.log(card)

// 4. Reprendre l'exercice et y appliquer une approche orientée objet. Concevoir une classe pour representer 
// l'entitée carte qui sera ensuite manipulée par les fonction précédement écrites.
class Card {
    constructor(valeur,couleur) {
        this.valeur = valeur;
        this.couleur = couleur;
    }
}

// 5. Écrire une fonction showdown qui affichera la main d'un joueur. Elle prendra donc, en premier paramètre, 
// les deux cartes d'un joueur, et en second le flop (cards déclaré en étape 3). Une main de joueur peut posséder 
// les éléments suivants : une ou deux paires, un brelan, un carré, une couleur, une suite ou une quinte.
const showdown = (player, card) => {
    for (let i = 0; i < card.length; i++) {
        player.push(card[i]);
    }
    return player
}
console.log(showdown(player1,card))
console.log(showdown(player2,card))

// const isQuinteFlushRoyale = (main) => {

// }

// const isQuinteFlush = (main) => {

// }

// const isCarre = (main) => {

// }

// const isFull = (main) => {

// }

// const isCouleur = (main) => {

// }

// const isSuite = (main) => {

// }

// const isBrelan = (main) => {

// }

// const isDoublePaire = (main) => {

// }

// const isPaire = (main) => {

// }

// const isCarteHaute = (main) => {

// }

