from turtle import Turtle, Screen
import random

# E = 0, N = 90, W=180, S = 270
screen = Screen()
screen.setup(width=500, height=400)

colors = ["red", "orange", "yellow", "green", "blue", "purple"]

# User input
bet = screen.textinput(title="Make your bet", prompt="Which turtle will win the race? Enter a color: ").title()

y = -100
tartarugas = []
for i in range(6):
    tartarugas.append(Turtle(shape="turtle"))
    tartarugas[i].color(colors[i])
    tartarugas[i].penup()
    y += 30
    tartarugas[i].goto(x=-230, y=y)

race_on = True
while race_on:
    for tartaruga in tartarugas:

        if tartaruga.xcor() > 230:
            winner_color = tartaruga.pencolor().title()
            if winner_color == bet:
                print(f"You've won! The {winner_color} turtle is the winner! 🏆")
            else:
                print(f"You've lost! The {winner_color} turtle is the winner! 🙁")
            race_on = False

        tartaruga.forward(random.randint(0, 10))

screen.exitonclick()
