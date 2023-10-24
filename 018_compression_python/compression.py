texte = "généralement, on utilise un texte en faux latin ( le texte ne veut rien dire, il a été modifié ), le lorem ipsum ou lipsum, qui permet donc de faire office de texte d'attente. l'avantage de le mettre en latin est que l'opérateur sait au premier coup d'oeil que la page contenant ces lignes n'est pas valide, et surtout l'attention du client n'est pas dérangée par le contenu, il demeure concentré seulement sur l'aspect graphique. ce texte a pour autre avantage d'utiliser des mots de longueur variable, essayant de simuler une occupation normale. la méthode simpliste consistant à copier-coller un court texte plusieurs fois ( « ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte » ) a l'inconvénient de ne pas permettre une juste appréciation typographique du résultat final. il circule des centaines de versions différentes du lorem ipsum, mais ce texte aurait originellement été tiré de l'ouvrage de cicéron, de finibus bonorum et malorum ( liber primus ), texte populaire à cette époque, dont l'une des premières phrases est : « neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... » ( « il n'existe personne qui aime la souffrance pour elle-même, ni qui la recherche ni qui la veuille pour ce qu'elle est... » ). expert en utilisabilité des sites web et des logiciels, jakob nielsen souligne que l'une des limites de l'utilisation du faux-texte dans la conception de sites web est que ce texte n'étant jamais lu, il ne permet pas de vérifier sa lisibilité effective. la lecture à l'écran étant plus difficile, cet aspect est pourtant essentiel. nielsen préconise donc l'utilisation de textes représentatifs plutôt que du lorem ipsum. on peut aussi faire remarquer que les formules conçues avec du faux-texte ont tendance à sous-estimer l'espace nécessaire à une titraille immédiatement intelligible, ce qui oblige les rédactions à formuler ensuite des titres simplificateurs, voire inexacts, pour ne pas dépasser l'espace imparti. contrairement à une idée répandue, le faux-texte ne donne même pas un aperçu réaliste du gris typographique, en particulier dans le cas des textes justifiés : en effet, les mots fictifs employés dans le faux-texte ne faisant évidemment pas partie des dictionnaires des logiciels de pao, les programmes de césure ne peuvent pas effectuer leur travail habituel sur de tels textes. par conséquent, l'interlettrage du faux-texte sera toujours quelque peu supérieur à ce qu'il aurait été avec un texte réel, qui présentera donc un aspect plus sombre et moins lisible que le faux-texte avec lequel le graphiste a effectué ses essais. un vrai texte pose aussi des problèmes de lisibilité spécifiques ( noms propres, numéros de téléphone, retours à la ligne fréquents, composition des citations en italiques, intertitres de plus de deux lignes ... ) qu'on n'observe jamais dans le faux-texte."

#1 - Découper et reconstruire le texte

#Découpage
#Créez une fonction A prenant en paramètre ce texte et retourne une liste de mots.

def A (text):
    text_list = text.split(" ")
    return text_list

print(A(texte))

#Reconstruction
#Créez également une fonction B prenant en paramètre une liste de mots, et retournant une chaîne de caractère composée
# de l'ensemble des mots dans l'ordre, séparés par un espace.

def B (text_list):
    text_recompo = " ".join(text_list)
    return text_recompo

test = ['généralement,', 'on', 'utilise', 'un', 'texte', 'en', 'faux', 'latin', '(', 'le', 'texte', 'ne', 'veut', 'rien', 'dire,']
print(B(A(texte)))
print(test[1])

#2 - Compression avec dictionnaire fixe
dictionnaire = {'texte': '1',
 'lorem': '2',
 'qui': '3',
 'donc': '4',
 'est': '5',
 'que': '6',
 'pour': '7',
 'ceci': '8',
 'faux-texte': '9',
 'dans': '10',
 'plus': '11',
 'avec': '12'}

#Créez une fonction C prenant en paramètre une liste de mots et un dictionnaire.
#Pour chaque mot dans la liste, si le mot existe dans le dictionnaire en tant que clef, remplacez-le par la valeur associée.
#Vous pouvez maintenant enchaîner vos fonctions A, C et B pour produire un nouveau texte compressé
def C (text_list, dictionnaire):
    for i in range(len(text_list)):
        for j in dictionnaire:
            if (text_list[i] == j):
                text_list[i] = str(dictionnaire[j])
    return text_list
print(B(C(A(texte), dictionnaire)))

#3 - Décompression
def decompresser (text_code, dictionnaire):
    text_list = A(text_code)
    for i in range(len(text_list)):
        for clef, valeur in dictionnaire.items():
            if (text_list[i] == valeur):
                text_list[i] = clef
    texte_original = B(text_list)
    return texte_original
test = "généralement, on utilise un 1 en faux latin ( le 1 ne veut rien dire, il a été modifié ), le 2 ipsum ou lipsum, 3 permet 4 de faire office de 1 d'attente."
print(decompresser(test, dictionnaire))

#4 - Un meilleur dictionnaire
#Nous allons donc faire une fonction pour générer notre propre dictionnaire.
#Créez une fonction D qui prend en paramètre une liste de mots, et retourne un dictionnaire dont les clefs sont les mots du texte,
# et les valeurs leur nombre d'apparition.
def D (text_list):
    dico_perso = {}
    for mot in text_list:
        if mot in dico_perso:
            dico_perso[mot] += 1
        else:
            dico_perso[mot] = 1
    return dico_perso
print(D(A(texte)))

#Il vous est également possible de générer automatiquement un dictionnaire de références à partir des contraintes de votre choix,
# par exemple "je ne veux remplacer que les mots de plus de 3 caractères qui apparaissent au moins 2 fois".
#Il vous faut pour cela une fonction E qui prend en paramètre un dictionnaire de nombre d'apparition des mots,
# et qui retourne un dictionnaire de référence.
#Vous pouvez donc, à partir de ces contraintes, filtrer le dictionnaire produit par votre fonction D,
# puis associer à chacun des mots conservés une référence unique
def E (dico_perso):
    dico_ref = {}
    ref_unique = 1
    for clef, valeur in dico_perso.items():
        if (valeur > 1) and (len(clef) > 3):
            dico_ref[clef] = ref_unique
            ref_unique += 1
    return dico_ref
print(E(D(A(texte))))

#calcul du taux de compression
def F (texte):
    longueur_initiale = len(texte)
    longueur_compressee = len(B(C(A(texte), E(D(A(texte))))))
    taux_compression = (longueur_initiale - longueur_compressee) / longueur_initiale * 100
    return str(taux_compression) + " % de taux de compression"
print(F(texte))

