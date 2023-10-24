// 1. Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. 
// Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.

// Vous aurez probablement besoin de créer une autre fonction maxDaysInMonth 
// pour vous assurer que le nombre de jours par mois est valide 
// (ex: le 31/11 n’est pas valide, le mois de novembre ne contient que 30 jours)
const maxDaysInMonth = (d, m) => {
    if ((m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) && (d <= 31)) {
        return true
    }
    else if ((m === 2) && (d <= 29)) {
        return true
    }
    else if ((m === 4 || m === 6 || m === 8 || m === 10 || m === 12) && (d <= 30)) {
        return true
    }
    else { return false }
}
console.log(maxDaysInMonth(31, 5))
// const dayPerMonth = {
//     31: [1, 3, 5, ...]
//     30: [4, 6, ...]
//     29 : [2]
// }

// Tout au long de l’exercice, on supposera des années supérieures à 999 et inférieures 9999 - autrement dit, 
// l’année sera systématiquement représentée sur 4 caractères.

const isValidDate = (date) => {
    let d = parseInt(date.slice(0, 2));
    let m = parseInt(date.slice(3, 5));
    let y = parseInt(date.slice(6, 10));
    if ((maxDaysInMonth(d, m) === true) && (m > 0 && m <= 12) && (y > 999 && y < 9999)) {
        return true
    }
    else {
        return false
    }
}
console.log(isValidDate("03/04/2001"))
console.log(isValidDate("03/14/2001"))

// .split("/") -> tableau 
// .map (s -> parseInt(s))

// 2. Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen 
// qui indique si la date est un palindrome. Si la date est invalide, retourner false.
const isPalindrome = (date) => {
    let d = (date.slice(0, 2));
    let m = (date.slice(3, 5));
    let y = (date.slice(6, 10));
    if ((isValidDate(date) === true) && ((d + m) === (y.split("").reverse().join("")))) {
        return true
    }
    else {
        return false
    }
}
console.log(isPalindrome("11/02/2011"))
console.log(isPalindrome("03/04/2001"))
// .split("") = transforme un string en array
// .reverse() = inverse les éléments du tableau
// .join("") = joint + transforme en string

// 3. Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui. 
// La fonction prendra le x en paramètre.

const getNextPalindromes = (x) => {
    const dateAuj = new Date().toLocaleDateString("fr");
    console.log(dateAuj);
    let count = 0;
    let y = parseInt((dateAuj.slice(6, 10)));
    for (y; count < x; y++) {
        let m = y.toString().slice(0, 5).split("").slice(0, 2).reverse().join("");
        let d = y.toString().slice(0, 5).split("").slice(2, 4).reverse().join("");
        let datePalindrome = d + '/' + m + '/' + y.toString();
        if (isValidDate(datePalindrome)) {
            count++;
            console.log(datePalindrome);
        }
    }
}
getNextPalindromes(3)

// on peut faire un do while tant que le tableau.length < x

// 4. Refactorer la fonction isPalindrome pour faire en sorte qu’elle renvoie si, ou non, une chaine de caractère est un palindrome.
// Créer ensuite une nouvelle fonction isDatePalindrome qui reprendra les spécificités du palindrome au format date 
// (comme s’assurer que la date est valide) et qui appellera isPalindrome.

const isPalindrome2 = (string) => {
    if ((string) === (string.split("/").reverse().join(""))) {
        return true
    }
    else {
        return false
    }
}
console.log(isPalindrome2("hello"))
console.log(isPalindrome2("kayak"))

const isDatePalindrome = (date) => {
    if (isValidDate(date) && isPalindrome2(date)) {
        return true
    }
    else {
        return false
    }
}
console.log(isDatePalindrome("11/02/2011"))
console.log(isDatePalindrome("03/04/2001"))