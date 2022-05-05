from turtle import Screen
from snake import Snake
from food import Food
from scoreboard import Scoreboard
import time

screen = Screen()
screen.setup(width=600, height=600)
screen.bgcolor("black")
screen.title("My Snake Game 🐍")
screen.tracer(0)  # Turn off animation

snake = Snake()
food = Food()
score = Scoreboard()

# Control Snake
# E = 0, N = 90, W=180, S = 270
screen.onkeypress(fun=snake.up, key="Up")
screen.onkeypress(fun=snake.down, key="Down")
screen.onkeypress(fun=snake.left, key="Left")
screen.onkeypress(fun=snake.right, key="Right")
screen.listen()

game_on = True
while game_on:
    screen.update()
    time.sleep(0.1)
    snake.move_snake()

    # Detect collision with food.
    if snake.head_snake.distance(food) < 15:
        food.refresh()
        score.update_score()
        snake.create_snake(1)  # Extend Snake

    # Detect collision with wall.
    if (
        snake.head_snake.xcor() > 280
        or snake.head_snake.xcor() < -280
        or snake.head_snake.ycor() > 280
        or snake.head_snake.ycor() < -280
    ):
        score.game_over()
        game_on = False

    # Detect collision with tails
    for block in list(snake.blocks.values())[1:]:
        if snake.head_snake.distance(block) < 10:
            score.game_over()
            game_on = False

screen.exitonclick()
