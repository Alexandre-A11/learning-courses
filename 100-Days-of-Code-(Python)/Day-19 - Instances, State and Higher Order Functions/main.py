from turtle import Turtle, Screen


def move_fowards():
    tartaruga.forward(10)


tartaruga = Turtle()
screen = Screen()

screen.listen()
screen.onkey(key="space", fun=move_fowards)

screen.exitonclick()
