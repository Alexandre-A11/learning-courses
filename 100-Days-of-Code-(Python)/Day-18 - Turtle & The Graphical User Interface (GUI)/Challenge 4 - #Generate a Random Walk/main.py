# import turtle as t
# import random

# tim = t.Turtle()

########### Challenge 4 - Random Walk ########
# E = 0, N = 90, W=180, S = 270
from turtle import Turtle, Screen, colormode
import random


tartaruga = Turtle()
tartaruga.shape("turtle")
tartaruga.pensize(10)
tartaruga.speed("fast")
colormode(255)


def random_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    return (r, g, b)


colors = [
    "CornflowerBlue",
    "DarkOrchid",
    "IndianRed",
    "DeepSkyBlue",
    "LightSeaGreen",
    "wheat",
    "SlateGray",
    "SeaGreen",
]

directions = [0, 90, 180, 270]


for i in range(100):
    tartaruga.setheading(random.choice(directions))
    tartaruga.pencolor(random_color())
    tartaruga.forward(30)


screen = Screen()
screen.exitonclick()
