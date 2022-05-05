import smtplib

EMAIL = "your.email@gmail.com"
PASSWORD = "your_password"
TO_WHO = "destination@gmail.com"
MSG = "Subject:Hello\n\nThis is the body of my email."


# porta 587 é necessária em alguns casos.

# * Método 1:
# connection = smtplib.SMTP("smtp.gmail.com", port=587)
# connection.starttls()
# connection.login(user=EMAIL, password=PASSWORD)
# connection.sendmail(
#     from_addr=EMAIL,
#     to_addrs=TO_WHO,
#     msg=MSG",
# )
# connection.close()

# * Método 2:
# with smtplib.SMTP("smtp.gmail.com", port=587) as connection:
#     connection.starttls()
#     connection.login(user=EMAIL, password=PASSWORD)
#     connection.sendmail(
#         from_addr=EMAIL,
#         to_addrs=TO_WHO,
#         msg=MSG,
#     )

import datetime

now = datetime.datetime.now()
year = now.year
month = now.month
day_of_week = now.weekday()

print(now)
print(type(now))

print(year)
print(type(year))

print(day_of_week)

date_of_birth = datetime.datetime(year=1995, month=12, day=15, hour=4)
print(date_of_birth)
