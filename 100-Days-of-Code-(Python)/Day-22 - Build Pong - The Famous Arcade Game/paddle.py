from turtle import Turtle


class Paddle(Turtle):
    def __init__(self, coordinates):
        super().__init__()
        self.shape("square")
        self.penup()
        self.color("white")
        self.shapesize(stretch_wid=5, stretch_len=1)
        self.goto(coordinates)

    def up(self):
        if self.ycor() < 260:
            self.goto(x=self.xcor(), y=self.ycor() + 20)

    def down(self):
        if self.ycor() > -240:
            self.goto(x=self.xcor(), y=self.ycor() - 20)
