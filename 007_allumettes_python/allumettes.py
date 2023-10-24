# On décrit le jeu des allumettes : au départ, il y a un tas de 50 allumettes. Chacun à son tour, les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes. Celui qui ôte la dernière allumette gagne.
# 1. Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.

total_allumettes = 50
def retire_allumettes (nb_a_retirer, nombre_total) :
    nombre_total -= nb_a_retirer
    return nombre_total
total_allumettes = retire_allumettes(3,total_allumettes)
print(total_allumettes)

# 2. Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas.
while  total_allumettes > 0:
    reponse = 0
    while reponse < 1 or reponse > 6:
        reponse = int(input("Combien voulez-vous retirer d'allumettes ?"))
    total_allumettes = retire_allumettes(reponse,total_allumettes)
    print (total_allumettes)
print("Victoire !")

# 3. Limiter le nombre d’allumettes à pouvoir être retirées de 1 à 6.
# Ajouter a votre jeu la notion de victoire.



