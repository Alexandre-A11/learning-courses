import turtle, random

tartaruga = turtle.Turtle()
tartaruga.speed("fastest")
tartaruga.pensize(2)
turtle.colormode(255)


def random_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    color = (r, g, b)
    return color


########### Challenge 5 - Spirograph ########
# E = 0, N = 90, W=180, S = 270
for i in range(0, 360, 5):  # Degree 360 it's the same as degree 0, so it's not necessary
    tartaruga.setheading(i), tartaruga.pencolor(random_color())
    tartaruga.circle(200)


screen = turtle.Screen()
screen.exitonclick()
