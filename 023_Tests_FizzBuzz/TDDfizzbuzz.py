from fizzbuzz import process
from fizzbuzz import functionFizz

def test_fizz():
    assert process(3) == 'Fizz', "3 devrait retourner Fizz"
    assert process(6) == 'Fizz', "6 devrait retourner Fizz"

def test_buzz():
    assert process(5) == 'Buzz', "5 devrait retourner Buzz"
    assert process(10) == 'Buzz', "10 devrait retourner Buzz"

def test_fizzbuzz():
    assert process(15) == 'FizzBuzz', "15 devrait retourner FizzBuzz"
    assert process(30) == 'FizzBuzz', "30 devrait retourner FizzBuzz"

def test_number():
    assert process(2) == 2, "2 devrait retourner 2"
    assert process(98) == 98, "98 devrait retourner 98"

def test_list():
    assert functionFizz(5) == [1, 2, 'Fizz', 4, 'Buzz'], "5 devrait retourner [1, 2, 'Fizz', 4, 'Buzz']"
