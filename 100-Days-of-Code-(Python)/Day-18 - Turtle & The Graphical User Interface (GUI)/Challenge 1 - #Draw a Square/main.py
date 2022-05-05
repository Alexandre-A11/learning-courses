#####Turtle Intro######

# import turtle as t

# timmy_the_turtle = t.Turtle()
# timmy_the_turtle.shape("turtle")
# timmy_the_turtle.color("red")
# timmy_the_turtle.forward(100)
# timmy_the_turtle.backward(200)
# timmy_the_turtle.right(90)
# timmy_the_turtle.left(180)
# timmy_the_turtle.setheading(0)


######## Challenge 1 - Draw a Square ############
# E = 0, N = 90, W=180, S = 270
from turtle import Turtle, Screen

tartaruga = Turtle()
tartaruga.shape("turtle")
tartaruga.color("DeepSkyBlue")

for i in range(4):
    tartaruga.forward(100)
    tartaruga.left(90)

screen = Screen()
screen.exitonclick()
