import random

liste = ['blue','red','yellow','green']
code_secret = ['blue','green']
def checkColorAreDifferent(color1,color2):
    if(color1!=color2):
        return True
    else:
        return False

def checkColor ():
    for i in range(12):
        sample = random.sample(liste, 2)
        print(sample[0],sample[1])
        if checkColorAreDifferent(sample[0], sample[1]) == True:
            print(sample)
            if code_secret == sample:
                print('True')
                return True
            else:
                print('False')
        else:
            print("Error : Color are the same")
            return False
checkColor()

def continueGame ():
    while (checkColor() != True):
        print("on continue de jouer")
        checkColor()
    print("Jeu terminé")
continueGame()


liste = ['blue','red','yellow','green','orange','purple','brown','black']
code_secret = ['blue','green']
def colorAreDifferent(liste):
    for i in range (len(liste) - 1):
        for k in range (i+1, len(liste) - 1):
            if (liste[i] == liste[k]):
                return False
            
