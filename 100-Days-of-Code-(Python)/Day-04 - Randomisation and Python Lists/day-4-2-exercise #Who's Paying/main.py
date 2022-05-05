# Split string method
names_string = input("Give me everybody's names, separated by a comma. ")
names = names_string.split(", ")
# 🚨 Don't change the code above 👆

#Write your code beloaw this line 👇
import random

# Método 1:
choiced_one = names[random.randint(0, len(names) - 1)]
print(f"{choiced_one}, is going to buy the meal today!")

# Método 2:
choiced_one = random.choice(names)
print(f"{choiced_one}, is going to buy the meal today!")
