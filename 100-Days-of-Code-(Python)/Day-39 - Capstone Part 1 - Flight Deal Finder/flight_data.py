import requests, dotenv, os, datetime
from dateutil.relativedelta import relativedelta

dotenv = os.getenv("dotenv")
URL = os.getenv("TEQUILA_URL")
API_KEY = os.getenv("TEQUILA_API_KEY")
TODAY = datetime.datetime.now()


class FlightData:
    # This class is responsible for structuring the flight data.
    def search_flight(self, city_code):
        parameters = {
            "fly_from": "LON",
            "fly_to": city_code,
            "date_from": (TODAY + datetime.timedelta(days=1)).strftime("%d/%m/%Y"),
            "date_to": (TODAY + relativedelta(day=+2, months=+6)).strftime("%d/%m/%Y"),
            "nights_in_dst_from": 7,
            "nights_in_dst_to": 28,
            "flight_type": "round",
            "one_for_city": 1,
            "max_stopovers": 0,
            "curr": "GBP",
        }
        response = requests.get(url=f"{URL}/search", params=parameters, headers={"apikey": API_KEY})
        # print(response.json()["data"][0]["cityFrom"])
        return {
            "departure_city": response.json()["data"][0]["cityFrom"],
            "departure_code": response.json()["data"][0]["flyFrom"],
            "arrivel_city": response.json()["data"][0]["cityTo"],
            "arrivel_code": response.json()["data"][0]["flyTo"],
            "price": response.json()["data"][0]["price"],
        }
