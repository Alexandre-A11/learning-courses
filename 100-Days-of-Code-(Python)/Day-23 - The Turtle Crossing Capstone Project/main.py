import time
from turtle import Screen
from player import Player
from car_manager import CarManager
from scoreboard import Scoreboard


screen = Screen()
screen.setup(width=600, height=600)
screen.tracer(0)
screen.listen()


tartaruga = Player()
scoreboard = Scoreboard()
car_manager = CarManager()

screen.onkey(fun=tartaruga.up, key="Up")

game_is_on = True
while game_is_on:
    time.sleep(0.1)
    screen.update()

    car_manager.create_car()

    if car_manager.move_car(turtle=tartaruga) == False:
        game_is_on = False
        scoreboard.GameOver()

    if tartaruga.in_finish_line():
        scoreboard.next_level()
        car_manager.speed_up()
        tartaruga.start_position()


screen.exitonclick()
