# https://www.latlong.net/
import requests, smtplib, time
from datetime import datetime

EMAIL = "your_email@here.com"
PASSWORD = "your_password"
DESTINATION = "destination@here.com"
MESSAGE = "LOOK UP! NOW!! 👆🏼 "
SECONDS = 60

MY_LAT = -16.701534  # Your latitude
MY_LONG = -43.807064  # Your longitude


def ISS_POSITION():
    response = requests.get(url="http://api.open-notify.org/iss-now.json")
    response.raise_for_status()
    data = response.json()

    iss_latitude = float(data["iss_position"]["latitude"])
    iss_longitude = float(data["iss_position"]["longitude"])

    # Your position is within +5 or -5 degrees of the ISS position.
    POSITION = (MY_LAT - 5 <= iss_latitude <= MY_LAT + 5) and (MY_LONG - 5 <= iss_latitude <= MY_LONG + 5)

    parameters = {
        "lat": MY_LAT,
        "lng": MY_LONG,
        "formatted": 0,
    }

    response = requests.get("https://api.sunrise-sunset.org/json", params=parameters)
    response.raise_for_status()
    data = response.json()
    sunrise = int(data["results"]["sunrise"].split("T")[1].split(":")[0])
    sunset = int(data["results"]["sunset"].split("T")[1].split(":")[0])

    time_now = datetime.now().hour

    # Verify if it's currently dark and return True or False
    CURRENTLY_DARK = time_now >= sunset or time_now <= sunrise

    # If the ISS is close to my current position
    # and it is currently dark
    # Then send me an email to tell me to look up.
    if POSITION and CURRENTLY_DARK:
        with smtplib.SMTP("smtp.gmail.com", port=587) as connection:
            connection.starttls()
            connection.login(user=EMAIL, password=PASSWORD)
            connection.sendmail(
                from_addr=EMAIL,
                to_addrs=DESTINATION,
                msg=f"Subject: ISS OVERHEAD\n{MESSAGE}",
            )
    print(POSITION)
    print(CURRENTLY_DARK)


# BONUS: run the code every 60 seconds.
while True:
    time.sleep(SECONDS)
    ISS_POSITION()
