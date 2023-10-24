// 1. Écrire une fonction sum1 qui prend un tableau d’entiers à additionner entre eux.
let tableau = [0, 1, 2, 3, 4, 5]

const sum1 = (tab) => {
    let somme = 0;
    for (let i = 0; i < tab.length; i++) {
        somme += tab[i]
    }
    return somme
}
sum1(tableau)
console.log(sum1(tableau))

// 2. Même exercice, mais avec une fonction récursive. On appellera la fonction sum2.
const sum2 = (tab) => {
    if (tab.length != 0) {
        return (tab[0] + sum2(tab.slice(1, tab.length)))
    }
    else {
        return 0
    }
}
sum2(tableau)
console.log(sum2(tableau))

// 3. On appelle factoriel le produit des entiers inférieurs ou égaux à un nombre donné. Exemple : factoriel de 3 = 1x2x3 = 6
// Écrire une fonction factorial qui prend un entier en paramètre et calcule son factoriel récursivement.
const factorial = (n) => {
    if (n > 0) {
        return n * factorial(n - 1)
    }
    else {
        return 1
    }
}
console.log(factorial(3))

// 4. En mathématiques, la suite de Fibonacci est une suite de nombres entiers dont chaque terme successif 
// représente la somme des deux termes précédents, et qui commence par 0 et 1. Ainsi, les dix premiers termes 
// qui la composent sont 0, 1, 1 (0+1), 2 (1+1), 3 (1+2), 5 (2+3), 8 (3+5), 13 (5+8), 21 (8+13) et 34 (13+21).
// Écrire une fonction fibonacci qui prend un entier x en paramètre et résoud la suite de Fibonacci.
const fibonacci = (x) => {
    if (x == 0) {
        return 0
    }
    else if (x == 1) {
        return 1
    }
    else {
        return (fibonacci(x - 1) + fibonacci(x - 2))
    }
}
console.log(fibonacci(8))