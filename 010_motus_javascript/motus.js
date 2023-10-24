// Le Motus est un jeu télévisé ou les candidats doivent deviner un mot. 
// Leur est fourni un nombre de lettres et la première lettre du mot à deviner. 
// Quand un candidat essaie un mot, on lui dit si les lettre données sont bonnes, mal placés, ou pas dans le mot.
// Vous trouverez en annexe les sources HTML et JavaScript du jeu Motus. Ces sources présentent des bugs.
// L’objectif de l’exercice est d’avoir un jeu fonctionnel.

function tryWord(word, secretWord) {
    if (word === secretWord) {
        return true
    } else {
        let wellPlaced = [];
        let notInWord = [];
        let missplaced = [];

        let arraySecretWord = secretWord.split('');
        let arrayWord = word.split('');

        for (let i = 0; i < arraySecretWord.length; i++) {
            if (arraySecretWord[i] === arrayWord[i]) {
                wellPlaced.push(arrayWord[i]);
            }
            else if (arraySecretWord.includes(arrayWord[i]) === false) {
                notInWord.push(arrayWord[i]);
            }
            else {
                missplaced.push(arrayWord[i])
            }
        }
        return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
    }
}

function guess() {
    let secretWord = 'dictionnaire'
    // DONE : jeu non sensible à la casse => majuscules = minuscules
    let word = document.getElementById("word").value.toLowerCase();
    let result = tryWord(word, secretWord);
    if (result == true) {
        document.getElementById("win").innerText = 'Vous avez gagné'
    }
    else {
        document.getElementById("word").value = ''
        document.getElementById("try").innerText = word
        document.getElementById("well").innerText = 'Bien placé: ' + result.wellPlaced.join(', ')
        document.getElementById("miss").innerText = 'Mal placé: ' + result.missplaced.join(', ')
        document.getElementById("not").innerText = 'Pas dans le mot: ' + result.notInWord.join(', ');
    }
}