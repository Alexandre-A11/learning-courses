import turtle
from prettytable import PrettyTable

# tartaruga = turtle.Turtle()
# print(tartaruga)
# tartaruga.shape("turtle")
# tartaruga.color("DeepSkyBlue")
# tartaruga.forward(100)

# my_screen = turtle.Screen()
# print(my_screen.canvheight)
# my_screen.exitonclick()

table = PrettyTable()

table.add_column("Pokemon Name", ["Bulbasaur", "Charmander", "Squirtle"])
table.add_column("Type", ["Grass", "Fire", "Water"])

table.align = "l"
print(table)
