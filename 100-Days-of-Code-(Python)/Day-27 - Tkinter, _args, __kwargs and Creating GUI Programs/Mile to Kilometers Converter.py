from tkinter import *


def converter():
    calc = float(input.get()) * 1.609
    km.config(text=calc)


window = Tk()
window.title("Mile to KM Converter")
window.config(padx=20, pady=20)

input = Entry(width=7)
input.grid(column=1, row=0)

label_miles = Label(text="Miles")
label_miles.grid(column=2, row=0)

label_text = Label(text="Is equal to")
label_text.grid(column=0, row=1)

km = Label(text=0)
km.grid(column=1, row=1)

label_km = Label(text="KM")
label_km.grid(column=2, row=1)


button = Button(text="Calculate", command=converter)
button.grid(column=1, row=2)
window.mainloop()
