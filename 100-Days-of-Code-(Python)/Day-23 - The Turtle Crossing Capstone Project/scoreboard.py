from turtle import Turtle

FONT = ("Courier", 24, "normal")
ALIGNMENT = "center"
POSITION = (-220, 260)


class Scoreboard(Turtle):
    def __init__(self):
        super().__init__()
        self.level = 0
        self.hideturtle()
        self.penup()
        self.goto(POSITION)
        self.next_level()

    def next_level(self):
        self.clear()
        self.level += 1
        self.write(f"Level: {self.level}", align=ALIGNMENT, font=FONT)

    def GameOver(self):
        self.goto(0, 0)
        self.write("Game Over", align=ALIGNMENT, font=FONT)
