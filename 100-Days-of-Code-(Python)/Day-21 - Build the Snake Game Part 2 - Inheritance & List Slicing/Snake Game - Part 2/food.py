from turtle import Turtle
import random


class Food(Turtle):
    def __init__(self):
        super().__init__()
        self.shape("circle")
        self.penup()
        self.shapesize(stretch_len=0.7, stretch_wid=0.7)
        self.color("blue")
        self.speed("fastest")
        self.refresh()

    def refresh(self):
        x_and_y = random.sample(range(-200, 201), 2)
        self.goto(x_and_y)
