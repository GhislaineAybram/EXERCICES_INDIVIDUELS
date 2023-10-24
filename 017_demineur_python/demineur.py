# 1. Pour commencer, avant de pouvoir poser nos bombes, il nous faut une grille et par conséquent une fonction génératrice de grille.
# Notre générateur de grille pourrait, à partir d'une taille de côté M - ou 2 tailles (M,N), générer une superbe grille. Remplie de 0 par exemple pour simplifier le coté "vide".
# Et qui pourrait, à partir d'un entier K, générer une grille parsemée de K merveilleuses cases pleines (ou noires, ou True, ou X) dans un océan de M*N-K cases vides (ou blanches, ou False).
# Ces K cases pleines seraient, réparties aléatoirement sur la grille.
# Générer cette grille en ligne de commande en python.
import random
import json


def genererUneGrille(m, n, k):
    nbCasesVides = m * n - k
    caseVide = '0'
    caseMine = 'X'
    grilleRemplie = [[0] * n for i in range(m)]
    positionnement = []
    for i in range(k):
        positionnement.append(caseMine)
    for i in range(nbCasesVides):
        positionnement.append(caseVide)
    random.shuffle(positionnement)
    for j in range(n):
        for i in range(m):
            grilleRemplie[i][j] = positionnement.pop()
    print(grilleRemplie)

#genererUneGrille(10, 5, 7)


#2. Mais imaginez, si la grille était d'abord neutre, et que vous puissiez, les unes après les autres, sélectionner les cases
#(par exemple en renseignant leurs coordonnées en ligne de commande), et les découvrir : soit pleines (ou noires, ou True), soit vides (ou blanches, ou False) ?
#Il vous faut pour cela une logique en boucle :
#La grille est affichée dans un certain état A. Au début, cet état est "neutre" : on ne connait pas le contenu des cases.
#Le jeu attend une action, un ordre ; vous l'exécutez (vous renseignez des coordonnées par exemple, ou - si vous vous êtes déjà diversifié dans le graphisme - vous cliquer sur une case, ...).
#Le jeu vous affiche le nouvel état B de la grille (l'état A plus le résultat de votre action).
#On recommence la boucle avec ce nouvel état B.

case = '.'

def genererUneGrilleVide(m, n) :
    grille = [[0] * n for i in range(m)]
    for j in range(n):
        for i in range(m):
            grille[i][j] = case
    return grille

def genererLesPions(m, n, k) :
    nbCasesVides = m * n - k
    caseVide = 'O'
    caseMine = 'X'
    positionnement = []
    for i in range(k):
        positionnement.append(caseMine)
    for i in range(nbCasesVides):
        positionnement.append(caseVide)
    random.shuffle(positionnement)
    return positionnement

#3. La ligne de commande, c'est cool, mais vous vous dites que pouvoir faire la même chose, mais avec une interface graphique, ça serait encore mieux.
# Changez votre affichage pour avoir quelque chose de plus visuel que de simples caractères ASCII.

def display_grid(grid, a, b):
    print("   ", end="|")
    for i in range(len(grid[0])):
        if (i<=a):
            print(" ", i+1, " ", end="|")
        else:
            print("  "+str(i)+" ", end="|")
    print("\n")
    j = 1
    for row in grid:
        if (j<b):
            print(j, " ", end="|")
        else:
            print(str(j)+" ", end="|")
        for el in row:
            print(" ", el, " ", end="|")
        print("\n")
        j+=1
grid = genererUneGrilleVide(10,5)
#print(display_grid(grid, 10, 5))

def gestionPartie(m, n, k) :
    partie = "en cours"
    grille_a_deviner = genererUneGrilleVide(m, n)
    positionnement = genererLesPions(m, n, k)
    for j in range(n):
        for i in range(m):
            grille_a_deviner[i][j] = positionnement.pop()
    #print(display_grid(grille_a_deviner, m, n))
    grille_a_afficher = genererUneGrilleVide(m, n)
    while (partie == "en cours"):
        x = int(input("Sur quelle ligne voulez-vous découvrir votre case ? "))
        y = int(input("Sur quelle colonne voulez-vous découvrir votre case ? "))
        grille_a_afficher[x-1][y-1] = grille_a_deviner[x-1][y-1]
        if grille_a_afficher[x-1][y-1] == 'X':
            partie = "finie"
            print("Vous avez perdu")
        else :
            print(display_grid(grille_a_afficher, m, n))

#gestionPartie(7, 5, 7)

#4. Bon, maintenant que vous avez tout ce qu’il vous faut, vous pouvez rajouter les règles du démineur et faire une petite partie !
#Les règles du démineur sont assez simples :
#La grille est générée avec un nombre de mines connu, et leurs emplacements sont figés.
#Lorsqu'on interroge la grille (on clique sur une case, ou on renseigne en ligne de commande les coordonnées d'une case, ...), deux cas possibles :
#La case est occupée par une mine : désolé, vous avez perdu !
#La case n'est pas occupée par une mine : bien joué, vous pouvez continuer !
#Et en plus, cette case affiche maintenant le nombre de mines dans l'ensemble des 8 cases adjacentes.

def ValeurCase(x, y, grille):
    valeur = 0
    for i in range(x-1, x+2):
        for j in range(y-1, y+2):
            if (0 <= i < len(grille) and 0 <= j < len(grille[0]) and (i != x or j != y) and grille[i][j] == 'X'):
                valeur += 1
    return valeur
#print(ValeurCase(1, 1, [['0','0','X'],['X','0','X'],['X','0','X']]))

def gestionPartiePoints(m, n, k) :
    partie = "en cours"
    grille_a_deviner = genererUneGrilleVide(m, n)
    positionnement = genererLesPions(m, n, k)
    for j in range(n):
        for i in range(m):
            grille_a_deviner[i][j] = positionnement.pop()
    print(display_grid(grille_a_deviner, m, n))
    for j in range(n):
        for i in range(m):
            if (grille_a_deviner[i][j] != 'X'):
                grille_a_deviner[i][j] = ValeurCase(i, j, grille_a_deviner)
    print(display_grid(grille_a_deviner, m, n))
    grille_a_afficher = genererUneGrilleVide(m, n)
    while (partie == "en cours"):
        x = int(input("Sur quelle ligne voulez-vous découvrir votre case ? "))
        y = int(input("Sur quelle colonne voulez-vous découvrir votre case ? "))
        grille_a_afficher[x-1][y-1] = ValeurCase(x-1, y-1, grille_a_deviner)
        if grille_a_afficher[x-1][y-1] == 'X':
            partie = "finie"
            print("Vous avez perdu :(")
            print(display_grid(grille_a_deviner, m, n))
        else :
            print(display_grid(grille_a_afficher, m, n))
gestionPartiePoints(6,5,7)


