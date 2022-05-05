from turtle import Screen
from snake import Snake

screen = Screen()
screen.setup(width=600, height=600)
screen.bgcolor("black")
screen.title("My Snake Game 🐍")
screen.tracer(0)  # Turn off animation

snake = Snake()

# Control Snake
# E = 0, N = 90, W=180, S = 270
screen.onkeypress(fun=snake.up, key="Up")
screen.onkeypress(fun=snake.down, key="Down")
screen.onkeypress(fun=snake.left, key="Left")
screen.onkeypress(fun=snake.right, key="Right")
screen.listen()


def game_on():
    snake.move_snake()
    screen.update()
    screen.ontimer(game_on, 100)


game_on()

screen.exitonclick()
