# Number Guessing Game Objectives:

# Include an ASCII art logo.
# Allow the player to submit a guess for a number between 1 and 100.
# Check user's guess against actual answer. Print "Too high." or "Too low." depending on the user's answer.
# If they got the answer correct, show the actual answer to the player.
# Track the number of turns remaining.
# If they run out of turns, provide feedback to the player.
# Include two different difficulty levels (e.g., 10 guesses in easy mode, only 5 guesses in hard mode).
import random, ascii

# Welcome
print(ascii.logo)
print("Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.")

# Dificulty
mode = input("Choose a difficulty. Type 'easy' or 'hard': ").lower()
qtd_quesses = 10 if mode == "easy" else 5

# Start Game
number = random.randint(1, 100)
print(f"Pssst, the correct answer is {number}")

while qtd_quesses > 0:
    print(f"You have {qtd_quesses} attempts remaining to guess the number.")
    guess = int(input("Make a Guess: "))

    if number > guess:
        print("Too low.")
    elif number < guess:
        print("Too high.")
    else:
        print(f"You got! The answer was {number}")
        qtd_quesses = 0

    qtd_quesses -= 1

    if qtd_quesses > 0:
        print("Guess Again.")
    elif qtd_quesses == 0:
        print("You've run out of guesses, you lose.")
