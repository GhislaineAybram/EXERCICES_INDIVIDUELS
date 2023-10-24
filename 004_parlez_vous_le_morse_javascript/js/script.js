const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H",
	' ': ''
  }

// 1. Ecrire une fonction getLatinCharacterList qui va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.
const getLatinCharacterList = (str) => {
    console.log(Array.from (str))
}
// spr.split('') = on va spliter un string avec '' -> a.split('U') de "FUTUR" = ["F","T","R"]
// pour séparer des mots a.split(' ')
let str = "Hello, world"
getLatinCharacterList(str)

// 2. Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.
const translateLatinCharacter = (letter) => {
    console.log(latinToMorse[letter])
}

let letter = "A"
translateLatinCharacter(letter)

// 3. Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1, 
// pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.
const encode = (str) => {
str=str.toUpperCase();
let result = getLatinCharacterList(str);
let morse="";
for (let i=0; i<str.length; i++) {
	morse += translateLatinCharacter(result[i]) + " ";
}
return morse;
}
str="Hello"
encode(str)

// 4. Créer la fonction getMorseCharacterList ainsi que translateMorseCharacter
const getMorseCharacterList = (strmorse) => {
	console.log(Array.from (strmorse))
}
let strmorse = ["...-", "---", "..", ".-..", ".-"]
getMorseCharacterList(strmorse)

const translateMorseCharacter = (morse) => {
	console.log(morseToLatin[morse])
}
let morse = "...-"
translateMorseCharacter(morse)

// const decode = (morse) => {
	
// }

// 5. Pour finir cet exercice, utilisez des champs de saisie input en HTML et des boutons pour traduire 
// du texte et du morse dans un sens ou dans l’autre.
