# https://www.webfx.com/web-development/glossary/http-status-codes/
import requests
from datetime import *

LAT = -16.701534
LNG = -43.807064
# response = requests.get(url="http://api.open-notify.org/iss-now.json")
# response.raise_for_status()

# data = response.json()

# longitude = data["iss_position"]["longitude"]
# latitude = data["iss_position"]["latitude"]

# iss_position = (longitude, latitude)
# print(iss_position)

# * Sunset

parameters = {
    "lat": LAT,
    "lng": LNG,
    "formatted": 0,
}


response = requests.get("https://api.sunrise-sunset.org/json", params=parameters)
response.raise_for_status()
data = response.json()
sunrise = data["results"]["sunrise"].split("T")[1].split(":")[0]
sunset = data["results"]["sunset"].split("T")[1].split(":")[0]

time_now = datetime.now().hour

print(f"Sunrise: {sunrise}\nSunset: {sunset}")
print(f"Time Now: {time_now}")
