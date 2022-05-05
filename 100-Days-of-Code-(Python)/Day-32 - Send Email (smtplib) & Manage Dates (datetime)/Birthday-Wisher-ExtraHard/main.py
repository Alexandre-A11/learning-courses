##################### Extra Hard Starting Project ######################

# 1. Update the birthdays.csv

# 2. Check if today matches a birthday in the birthdays.csv

# 3. If step 2 is true, pick a random letter from letter templates and replace the [NAME] with the person's actual name from birthdays.csv

# 4. Send the letter generated in step 3 to that person's email address.

EMAIL = "your.email.here@gmail.com"
PASSWORD = "your_password"

import pandas, smtplib, random, datetime as dt

now = dt.datetime.now()
current_day = now.day
current_month = now.month

data = pandas.read_csv("Birthday-Wisher-ExtraHard/birthdays.csv")


# Passa linha a linha no pandas DataFrame, comparando data atual com nascimento.
for (index, row) in data.iterrows():
    birth_month = row["month"]
    birth_day = row["day"]
    if current_day == birth_day and current_month == birth_month:
        name = row["name"]
        letter = f"letter_{random.randint(1,3)}"

        # Lê cartas e substitui [NAME] por variável name
        with open(f"Birthday-Wisher-ExtraHard/letter_templates/{letter}.txt") as file_letter:
            birthday_letter = file_letter.read().replace("[NAME]", name.strip())

        destination = row["email"]
        with smtplib.SMTP("smtp.gmail.com", port=587) as connection:
            connection.starttls()
            connection.login(user=EMAIL, password=PASSWORD)
            connection.sendmail(
                from_addr=EMAIL,
                to_addrs=destination,
                msg=f"Subject: Happy birthday!\n{birthday_letter}",
            )
