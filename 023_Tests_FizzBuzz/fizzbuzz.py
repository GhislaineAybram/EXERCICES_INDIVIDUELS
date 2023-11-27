# afficher "fizz" si divisible par 3 / afficher "buzz" si divisible par 5
# et afficher "fizzbuzz" si divisible par 3 et par 5

def process(number):
    if number % 3 == 0 and number % 5 == 0:
        return 'FizzBuzz'
    elif number % 3 == 0:
        return 'Fizz'
    elif number % 5 == 0:
        return 'Buzz'
    else:
        return number

def functionFizz (number):
    list = []
    for i in range(1, number+1):
       list.append(process(i))
    return list


