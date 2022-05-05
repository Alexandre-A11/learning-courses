import turtle, pandas

screen = turtle.Screen()
screen.title("U.S States Game")

image = "./us-states-game/blank_states_img.gif"
screen.addshape(image)
turtle.shape(image)

# Imprime coordenadas ao clicar na posição.
# def get_mouse_click_coor(x, y):
#     print(x, y)
# turtle.onscreenclick(get_mouse_click_coor)

data_us = pandas.read_csv("./us-states-game/50_states.csv")
states_list = data_us["state"].to_list()
correct_answer = 0

write = turtle.Turtle()
write.hideturtle()
write.penup()

while correct_answer < 50:
    answer_state = screen.textinput(
        title=f"{correct_answer}/50 States Correct", prompt="Wha'ts another state's name? "
    ).title()

    if answer_state == "Exit":
        break

    if answer_state in states_list:
        correct_answer += 1
        states_list.remove(answer_state)
        write.goto(
            int(data_us[data_us.state == answer_state].x),
            int(data_us[data_us.state == answer_state].y),
        )
        write.write(
            data_us[data_us.state == answer_state].state.item(),
            align="center",
            font=("Courier", 10, "normal"),
        )


# turtle.mainloop() # Desnecessário, devido ao while loop + função de Exit.

pandas.DataFrame(states_list).to_csv("./us-states-game/states_to_learn.csv")
