// 1. Ecrivez une fonction "sapin", qui prend en entrée un nombre entier et qui affiche un sapin, avec la logique suivante :
const espace = " "
const etoile = "*"

const etage = (n, i) => {
    console.log(espace.repeat(n - i) + `/` + etoile.repeat(i * 2 + 1) + `\\`);
}

const sapin = (n) => {
    console.log(espace.repeat(n + 1) + "+");
    for (let i = 0; i <= n; i++) {
        etage(n, i)
    }
}
// sapin(5)

// 2. Cette fois-ci on va rajouter une difficulté d’affichage :
const sapinIndente = (n) => {
    console.log(espace.repeat(n + 1) + "+");
    let k = 0;
    for (let i = 0; i <= n; i++) {
        if ( (i > 0) && (i % 3 === 0)) {
            k += 1 + k;
        }
        etage(n, i - k)
    }
}
// sapinIndente(7)

// 3. Avec un tronc
const ecorce = "#"

const sapinAvecTronc = (n) => {
    console.log(espace.repeat(n + 1) + "+");
    let k = 0;
    for (let i = 0; i <= n; i++) {
        if ( (i > 0) && (i % 3 === 0)) {
            k += 1 + k;
        }
        etage(n, i - k)
    }
    for (let t = 0; t < n / 3; t++) {
        console.log(espace.repeat(n+1) + ecorce.repeat(n / 3 + 1));
    }
}
// sapinAvecTronc(1)
// sapinAvecTronc(2)
// sapinAvecTronc(5)
// sapinAvecTronc(7)

// 4. Même principe que le niveau 3 mais avec des décorations (o) ajoutées aléatoirement 
// (vous choisissez la fréquence), de façon à ne jamais être totalement sur le bord du sapin.
const decoration1 = "+"
const decoration2 = "o"
const randomDeco = [decoration1, decoration2, etoile, etoile, etoile, etoile]
const randomBranche = () => {
    return randomDeco[Math.floor(Math.random() * randomDeco.length)];
}
let randomDecoUni = console.log(randomBranche())

const etageDecore = (n, i) => {
    console.log(espace.repeat(n - i) + `/` + etoile + randomDecoUni.repeat(i * 2 - 1) + etoile + `\\`);
}

const sapinDecore = (n) => {
    console.log(espace.repeat(n + 1) + "+");
    let k = 0;
    etage(0, 0);
    for (let i = 1; i <= n; i++) {
        if ( (i > 0) && (i % 3 === 0)) {
            k += 1 + k;
        }
        etageDecore(n, i - k)
    }
}
sapinDecore(7)

// 5. Faites en sorte de demander à l'utilisateur/trice le nombre d'étages qu'il/elle veut sur son sapin.