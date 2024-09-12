from random import *

while True:
    num = randint(1, 10)
    guess = '0'

    while int(guess) != num:
        guess = input('Guess a number between 1 and 10: ')

        if int(guess) < num:
            print('Too low')

        elif int(guess) > num:
            print('Too high')
        
    print('wow omg you got it so good wow')
    print('ok new number or say stop if you wanna stop for some odd reason you weirdo')