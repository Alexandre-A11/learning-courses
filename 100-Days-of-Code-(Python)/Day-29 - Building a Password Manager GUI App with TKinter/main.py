from tkinter import *
from tkinter import messagebox
import password_generator, pyperclip

# ---------------------------- PASSWORD GENERATOR ------------------------------- #
def create_password():
    password_input.delete(0, END)
    password = password_generator.generate_password()
    password_input.insert(0, password)
    pyperclip.copy(password)  # Copia automaticamente


# ---------------------------- SAVE PASSWORD ------------------------------- #
def save():
    website = website_input.get()
    email = login_input.get()
    password = password_input.get()

    if len(website) == 0 or len(email) == 0 or len(password) == 0:
        messagebox.showwarning(title="Oops", message="Please don't leave any fields empty!")
    else:
        confirm = messagebox.askokcancel(
            title=website,
            message="These are the details entered: \nEmail: {0} \nPassword: {1} \nConfirm Save? ".format(
                email, password
            ),
        )

        if confirm:
            with open("./data.txt", mode="a") as file:
                file.write("{0} | {1} | {2}\n".format(website, email, password))
            website_input.delete(0, END)  # Apaga texto em campo: 0 inicío, END final
            password_input.delete(0, END)
            messagebox.showinfo(title="Success", message="Data Successfully Saved!")


# ---------------------------- UI SETUP ------------------------------- #

window = Tk()
window.title("Password Generator")
window.config(padx=50, pady=50)

canvas = Canvas(width=200, height=200)
logo_img = PhotoImage(file="logo.png")
canvas.create_image(100, 100, image=logo_img)
canvas.grid(column=1, row=0)

website_label = Label(text="Website:")
website_label.grid(column=0, row=1)
website_input = Entry(width=43)
website_input.focus()  # Força cursor na caixa de texto
website_input.grid(column=1, row=1, columnspan=2)

login_label = Label(text="Email/Username:")
login_label.grid(column=0, row=2)
login_input = Entry(width=43)
login_input.insert(0, "alee.wxa@gmail.com")  # Preeche campo, 0 é a posição onde o texto começa, END último caractere
login_input.grid(column=1, row=2, columnspan=2)
password_label = Label(text="Password:")
password_label.grid(column=0, row=3)
password_input = Entry(width=25)
password_input.grid(column=1, row=3)

# Botões
button_generate = Button(text="Generate Password", command=create_password)
button_generate.grid(column=2, row=3)

button_add = Button(text="Add", width=40, command=save)
button_add.grid(column=1, row=4, columnspan=2)

window.mainloop()
