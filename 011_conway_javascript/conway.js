// 1. Créer une fonction decoupeChaine qui prend en paramètre une string et renvoie la même string dans laquelle 
// les caractères successifs non identiques sont séparés par un espace.

const decoupeChaine = (str) => {
    let stringEspace = str.charAt(0);
    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i) == str.charAt(i - 1)) {
            stringEspace = stringEspace + str.charAt(i)
        }
        else {
            stringEspace = stringEspace + " " + str.charAt(i)
        }
    }
    return (stringEspace)
}
console.log(decoupeChaine("aabbcc"))

// 2. Créer une fonction decritChaine, inspirée de decoupeChaine, qui prend en paramètre une string et renvoie 
// une string qui décrit, tel qu'expliqué ci-dessus, les caractères qui constituent la chaîne en paramètre.

const decritChaine = (str) => {
    let stringEspace = String(decoupeChaine(str)).split(" ");
    let stringDecrit = "";
    for (let i = 0; i < stringEspace.length; i++) {
        stringDecrit += stringEspace[i].length + stringEspace[i].charAt(0)
    }
    return stringDecrit
}
console.log(decritChaine("aaabbccccc"))

// 3. Créer une fonction suiteConway qui donne les n premiers termes de la suite qui commence par le caractère 
// carac. n et carac sont passés en paramètres de la fonction.

const suiteConway = (str, n) => {
    let suiteConway = str;
    console.log(suiteConway)
    for (let i = 1; i < n; i++) {
        suiteConway = decritChaine(suiteConway)
        console.log(suiteConway)
    }
}
suiteConway("a", 3)
suiteConway("1", 6)

// 4. Afficher la suite de Conway générée dans un navigateur.
// Utiliser un texte centré pour l'afficher sous forme de pyramide.
