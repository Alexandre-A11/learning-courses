###This code will not work in repl.it as there is no access to the colorgram package here.###
##We talk about this in the video tutorials##
import colorgram, turtle

# Take image colors
IMAGE_PATH = (
    "Python\\100 Days of Code\\Day-18 - Turtle & The Graphical User Interface (GUI)\\The Hirst Painting\\image.jpg"
)

rgb_colors = [(color.rgb.r, color.rgb.g, color.rgb.b) for color in colorgram.extract(IMAGE_PATH, 30)]


for i in range(10):
    print(f"Deleted: {rgb_colors[0]}")
    rgb_colors.pop(0)

print(f"Quantity of Colors: {len(rgb_colors)}")

# Start Turtle
X = -250
y = -250

turtle.colormode(255)

tartaruga = turtle.Turtle()
tartaruga.hideturtle()
tartaruga.speed("fastest")
tartaruga.penup()
tartaruga.goto(X, y)

color_index = 0
for i in range(10):
    y = tartaruga.pos()[1]
    for j in range(10):
        tartaruga.dot(20, rgb_colors[color_index])
        tartaruga.forward(50)

        color_index += 1
        if color_index > len(rgb_colors) - 1:
            color_index = 0

    tartaruga.goto(X, y + 50)

screen = turtle.Screen()
screen.exitonclick()
