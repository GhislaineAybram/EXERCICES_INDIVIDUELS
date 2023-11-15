// 0 - Définition et usages
// const expr = /<ma regex>/
// On écrit une regex entre deux slash "/" et on peut la stocker dans une variable. 
// On peut ensuite l'appliquer à une string avec la methode match
// const resp = "une chaine de char".match(exp)

// 1 - La chaine exacte ...
// Trouver l'expression qui renvoie le nombre de caractère "de". 
const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."

// const exp = /\sde\s/g
// /s = any whitespace character
// console.log(str.match(exp).length)

// 2 - ... ou une autre ...
// En partant du resultat optenu précédement, ajouter un opérateur logique OR (|) 
// pour avoir dans le même résultat le nombre articles "de" et "des".
// const exp = /\s(de|des)\s/g
// a|b = matches either what is before the | or what is after it - in this case `a` or `b`
// console.log(str.match(exp).length)

//3 - ... et encore une autre !
// Utiliser un "?" pour, avec la même expression, récuperer le nombre de "de", "des" et "les".
// const exp = /\s(?:de|des|les)\s/g
// You can use alternates locally as part of a capturing/non-capturing group. 
// For example: /I love (?:cats|dogs) but hate snakes/
// console.log(str.match(exp).length)

// 4 - Comptons les caractères
// Écrire la regex qui retourne le nombre de caractères alphabétiques dans la chaine.
// const exp = /[a-zA-Z]/g
// console.log(str.match(exp).length)

// 5 - Ainsi que les caractères spéciaux
// Écrire l'expression qui renvoie tous les caractères spéciaux présents dans la phrase (ponctuation et accents).
const exp = /[^\w\s\d]/g
// /w = matches any letter, digit or underscore. Equivalent to [a-zA-Z0-9_].
// /d = matches any decimal digit. Equivalent to [0-9]
console.log(str.match(exp).length)