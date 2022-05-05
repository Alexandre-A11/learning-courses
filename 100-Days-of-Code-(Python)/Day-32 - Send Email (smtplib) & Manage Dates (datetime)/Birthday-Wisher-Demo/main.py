import random, datetime as dt, smtplib


EMAIL = "your.email@here.com"
PASSWORD = "your_password"
TO_WHO = "destination@here.com"


weekday = dt.datetime.now().weekday()

if weekday == 0:
    with open("./Birthday Wisher/quotes.txt") as file_quotes:
        quotes = file_quotes.readlines()

    random_quote = random.choice(quotes)

    message = f"Subject:Monday Motivation (Day-32)\n\n{random_quote}."

    with smtplib.SMTP("smtp.gmail.com", port=587) as connection:
        connection.starttls()
        connection.login(user=EMAIL, password=PASSWORD)
        connection.sendmail(
            from_addr=EMAIL,
            to_addrs=TO_WHO,
            msg=message,
        )
