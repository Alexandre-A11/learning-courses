import random
from ascii import *

# Player
player_choice = int(
    input("Rock: 0\nPaper: 1\nScissors: 2\nType your choice: "))

while player_choice < 0 or player_choice > 2:
    player_choice = int(input("You typed an invalid number, Try again: "))

print(
    f"\nYou choiced: {names_choice[player_choice]}\n{rock_paper_scissors[player_choice]}"
)

# Computer
computers_choice = random.randint(0, 2)
print(
    f"Computers chose: {names_choice[computers_choice]}\n{rock_paper_scissors[computers_choice]}"
)

# Conditions
if player_choice == computers_choice:
    print("Draw 🤔")
elif computers_choice == 2 and player_choice == 0:
    print("You Win 😁")
elif computers_choice == 0 and player_choice == 2:
    print("You Lose 😒")
elif computers_choice < player_choice:
    print("You Win 😁")
else:
    print("You Lose 😒")
