# E = 0, N = 90, W=180, S = 270
from turtle import Turtle, Screen, colormode
import random

tartaruga = Turtle()
tartaruga.shape("turtle")
# tartaruga.color("DeepSkyBlue")
colormode(255)

def random_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    return (r, g , b)

tartaruga.color(random_color())


screen = Screen()
screen.exitonclick()

# my_tuple = (1, 3, 8)
# print(my_tuple[2])
# list(my_tuple)
