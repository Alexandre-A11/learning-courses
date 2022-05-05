import requests, os
from twilio.rest import Client
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.environ.get("WEATHER_API_KEY")
LAT = -3.119028
LNG = -60.021732
URL = "https://api.openweathermap.org/data/2.5/onecall"


# using get will return `None` if a key is not present rather than raise a `KeyError`
ACCOUNT_SID = os.environ["TWILIO_ACCOUNT_SID"]  # também pode ser escrito os.environ.get("TWILIO_ACCOUNT_SID")
AUTH_TOKEN = os.environ["TWILIO_AUTH_TOKEN"]  # também pode ser escrito os.environ.get("TWILIO_AUTH_TOKEN")
PHONE = os.environ["MY_PHONE"]  # também pode ser escrito os.environ.get("MY_PHONE")

parameters = {
    "appid": API_KEY,
    "lat": LAT,
    "lon": LNG,
    "exclude": "current,minutely,daily",
}

response = requests.get(URL, params=parameters)
response.raise_for_status()
weather_data = response.json()

umbrella = False
for hour in weather_data["hourly"][:12]:
    condition_code = hour["weather"][0]["id"]
    if condition_code < 700:
        umbrella = True

if umbrella:
    client = Client(ACCOUNT_SID, AUTH_TOKEN)

    message = client.messages.create(
        body="It's going to rain today, so bring an umbrella ☂️",
        from_="+14232056556",
        to=PHONE,
    )
