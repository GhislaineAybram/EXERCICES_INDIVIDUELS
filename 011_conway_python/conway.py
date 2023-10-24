# 1. Créer une fonction decoupeChaine qui prend en paramètre une string et renvoie la même string dans 
# laquelle les caractères successifs non identiques sont séparés par un espace.
def decoupeChaine (chaine) :
    result = []
    for i in range(len(chaine)) :
        if chaine[i] == chaine[i-1]:
           result.append(chaine[i])
        else:
           result.append(" " + chaine[i])
    return "".join(result).strip()
print(decoupeChaine("aabbca"))

#Créer une fonction decritChaine, inspirée de decoupeChaine, qui prend en paramètre une string
# et renvoie une string qui décrit, tel qu'expliqué ci-dessus, les caractères qui constituent la chaîne en paramètre.
def decritChaine(chaine) :
    result = ""
    chaineSplitee = decoupeChaine(chaine).split(" ")
    for i in range(len(chaineSplitee)):
        result = result + str(len(chaineSplitee[i])) + chaineSplitee[i][0]
    return result
print(decritChaine("aabbca"))

#Créer une fonction suiteConway qui donne les n premiers termes de la suite qui commence
# par le caractère carac. n et carac sont passés en paramètres de la fonction.
def suiteConway(chaine,n) :
    print(chaine)
    for i in range(n-1):
        chaine = decritChaine(chaine)
        print(chaine)
    return chaine
suiteConway("a",3)

