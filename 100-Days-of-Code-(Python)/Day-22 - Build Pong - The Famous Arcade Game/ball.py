from turtle import Turtle


class Ball(Turtle):
    def __init__(self):
        super().__init__()
        self.shape("circle")
        self.color("white")
        self.shapesize(stretch_len=0.7, stretch_wid=0.7)
        self.penup()
        self.x = 10
        self.y = 10
        self.move_speed = 0.04

    def move(self):
        self.goto(self.xcor() + self.x, self.ycor() + self.y)

    def bounce_y(self):
        self.y *= -1

    def bounce_x(self):
        self.x *= -1
        self.move_speed *= 0.9

    def score(self):
        self.bounce_x()
        self.bounce_y()
        self.move_speed = 0.04
        self.goto(0, 0)
