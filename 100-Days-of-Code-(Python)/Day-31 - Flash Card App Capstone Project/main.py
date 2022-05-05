import tkinter, random, pandas

BACKGROUND_COLOR = "#B1DDC6"

try:
    data = pandas.read_csv("./data/words_to_learn.csv")
except FileNotFoundError:
    original_data = pandas.read_csv("./data/french_words.csv")
    dict_learn = original_data.to_dict(orient="records")
else:
    dict_learn = data.to_dict(orient="records")

generated_word = {}
timer = 0


def next_card():
    global generated_word, timer

    canvas.itemconfig(card_image, image=card_front_image)
    generated_word = random.choice(dict_learn)
    french = generated_word["French"]

    canvas.itemconfig(title, text="French", fill="#000")
    canvas.itemconfig(word, text=french, fill="#000")

    window.after_cancel(timer)
    timer = window.after(3000, flip_card)


def flip_card():
    canvas.itemconfig(card_image, image=card_back_image)

    english = generated_word["English"]

    canvas.itemconfig(title, text="English", fill="#fff")
    canvas.itemconfig(word, text=english, fill="#fff")


def know_words():
    dict_learn.remove(generated_word)
    data = pandas.DataFrame(dict_learn)
    data.to_csv("./data/words_to_learn.csv", index=False)
    next_card()


window = tkinter.Tk()
window.title("Flashy Cards")
window.config(padx=50, pady=50, bg=BACKGROUND_COLOR)

timer = window.after(3000, flip_card)

canvas = tkinter.Canvas(width=800, height=526, bg=BACKGROUND_COLOR, highlightthickness=0)
card_front_image = tkinter.PhotoImage(file="./images/card_front.png")
card_back_image = tkinter.PhotoImage(file="./images/card_back.png")
card_image = canvas.create_image(400, 256, image=card_front_image)
title = canvas.create_text(400, 150, text="Title", font=("Arial", 40, "italic"))
word = canvas.create_text(400, 263, text="Word", font=("Arial", 40, "italic"))
canvas.grid(row=0, column=0, columnspan=2)

wrong_image = tkinter.PhotoImage(file="./images/wrong.png")
wrong_button = tkinter.Button(image=wrong_image, command=next_card)
wrong_button.grid(row=1, column=0)

right_image = tkinter.PhotoImage(file="./images/right.png")
right_button = tkinter.Button(image=right_image, command=know_words)
right_button.grid(row=1, column=1)

next_card()

window.mainloop()
