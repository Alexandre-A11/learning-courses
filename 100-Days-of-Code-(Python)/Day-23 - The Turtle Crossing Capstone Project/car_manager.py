from turtle import Turtle
from random import choice, randint

COLORS = ["red", "orange", "yellow", "green", "blue", "purple"]
STARTING_MOVE_DISTANCE = 5
MOVE_INCREMENT = 10


class CarManager:
    def __init__(self):
        self.all_cars = []
        self.car_speed = STARTING_MOVE_DISTANCE

    def create_car(self):
        if randint(1, 6) == 1:
            new_car = Turtle()
            new_car.shape("square")
            new_car.penup()
            new_car.setheading(180)
            new_car.color(choice(COLORS))
            new_car.goto(300, randint(-250, 250))
            new_car.shapesize(stretch_len=2, stretch_wid=1)
            self.all_cars.append(new_car)

    def move_car(self, turtle):
        """Movimenta todos os carros, e verifica atropelamento da tartaruga"""
        for car in self.all_cars:
            car.forward(self.car_speed)

            if car.distance(turtle) < 25:
                return False

    def speed_up(self):
        self.car_speed += MOVE_INCREMENT
