# import turtle as t

# tim = t.Turtle()

########### Challenge 3 - Draw Shapes ########
# A full circle has 360 degrees, so (360 / number of sides) will give the degree angles.
# E = 0, N = 90, W=180, S = 270
from turtle import Turtle, Screen

tartaruga = Turtle()
tartaruga.shape("turtle")

colors = [
    "purple",
    "turquoise1",
    "RoyalBlue1",
    "orchid",
    "MediumPurple2",
    "MediumSpringGreen",
    "LightSlateBlue",
    "DeepSkyBlue2",
]
number_of_sides = [3, 4, 5, 6, 7, 8, 9, 10]

for i, sides in enumerate(number_of_sides):
    tartaruga.color(colors[i])
    for j in range(sides):
        tartaruga.forward(100)
        tartaruga.left(360 / sides)

screen = Screen()
screen.exitonclick()
