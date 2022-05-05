from turtle import Turtle

STEPS = 20
UP = 90
LEFT = 180
DOWN = 270
RIGHT = 0

# E = 0, N = 90, W=180, S = 270
class Snake:
    def __init__(self):
        self.blocks = {}
        self.create_snake()
        self.head_snake = self.blocks["turtle0"]  # list(self.blocks.values())[0]

    def create_snake(self):
        for i in range(3):
            self.snake = Turtle(shape="square")
            self.snake.color("White")
            self.snake.penup()

            if len(self.blocks) > 0:
                last_block = list(self.blocks.values())[-1]
                position = list(last_block.pos())
                position[0] -= 20
                self.snake.goto(position)

            self.blocks[f"turtle{i}"] = self.snake

    def move_snake(self):
        for i in range(len(self.blocks) - 1, 0, -1):
            self.blocks[f"turtle{i}"].goto(self.blocks[f"turtle{i-1}"].pos())
        self.head_snake.forward(STEPS)

    def up(self):
        if self.head_snake.heading() != DOWN:
            self.head_snake.setheading(UP)

    def down(self):
        if self.head_snake.heading() != UP:
            self.head_snake.setheading(DOWN)

    def left(self):
        if self.head_snake.heading() != RIGHT:
            self.head_snake.setheading(LEFT)

    def right(self):
        if self.head_snake.heading() != LEFT:
            self.head_snake.setheading(RIGHT)
