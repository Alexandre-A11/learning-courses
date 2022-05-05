# import turtle as t

# tim = t.Turtle()

########### Challenge 2 - Draw a Dashed Line ########
# E = 0, N = 90, W=180, S = 270
from turtle import Turtle, Screen

tartaruga = Turtle()
tartaruga.shape("turtle")
tartaruga.color("DeepPink")


for i in range(30):
    tartaruga.penup() if i % 2 else tartaruga.pendown()
    tartaruga.forward(10)


screen = Screen()
screen.exitonclick()
