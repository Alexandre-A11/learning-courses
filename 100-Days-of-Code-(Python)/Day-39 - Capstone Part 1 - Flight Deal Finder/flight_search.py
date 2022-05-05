import requests, dotenv, os

dotenv.load_dotenv()
URL = os.getenv("TEQUILA_URL")
API_KEY = os.getenv("TEQUILA_API_KEY")


class FlightSearch:
    # This class is responsible for talking to the Flight Search API.
    def get_iata_code(self, city):
        response = requests.get(
            f"{URL}/locations/query",
            params={"term": city, "location_types": "city"},
            headers={"apikey": API_KEY},
        )
        return response.json()["locations"][0]["code"]
