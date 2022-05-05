from turtle import Turtle, Screen

# E = 0, N = 90, W=180, S = 270
# Functions
def move_fowards():
    tartaruga.forward(10)


def move_back():
    tartaruga.back(10)


def look_left():
    tartaruga.left(10)


def look_right():
    tartaruga.right(10)


def clear_draw():
    tartaruga.clear()


# Turtle + Screen
tartaruga = Turtle()
screen = Screen()

screen.listen()
# Response Keys
screen.onkeypress(key="w", fun=move_fowards)
screen.onkeypress(key="s", fun=move_back)
screen.onkeypress(key="a", fun=look_left)
screen.onkeypress(key="d", fun=look_right)
screen.onkey(key="c", fun=clear_draw)


screen.exitonclick()
