import random

couleurs = ["♠","︎♣︎","♡","♢"]
valeurs = ["1","2","3","4","5","6","7","8","9","10","J","Q","K"]

#1
def createDeck():
    deck = []
    for couleur in couleurs:
        for valeur in valeurs:
            deck.append(valeur+couleur)
    random.shuffle(deck)
    return deck

shuffle_deck = createDeck()
print(shuffle_deck)

#2
def deal(n):
    player = []
    for i in range(n):
        player.append(shuffle_deck.pop())
    return player
player1 = deal(2)
print(player1)
player2 = deal(2)
print(player2)

#3
def flop():
    cards = []
    deal(1)
    cards.extend(deal(3))
    deal(1)
    cards.extend(deal(1))
    deal(1)
    cards.extend(deal(1))
    return cards
cards = flop()
print(cards)

#5
def showDown(player,cards):
    mainplayer = []
    mainplayer.extend(player);
    mainplayer.extend(cards);
    return mainplayer
mainplayer1 = showDown(player1,cards)
print(mainplayer1)
mainplayer2 = showDown(player2,cards)
print(mainplayer2)

#4
class Carte:
    def __init__(self, valeurs, couleurs):
        self.valeurs = valeurs
        self.couleurs = couleurs
    def __str__(self):
        print(self.valeurs+self.couleurs)
    def show_card(self):
        print(valeurs+couleurs)

def createDeckObj():
    deckObj = []
    for couleur in couleurs:
        for valeur in valeurs:
            Card = Carte(valeur,couleur);
            deckObj.append(Card)
            print(Card)
    random.shuffle(deckObj)
    return deckObj


