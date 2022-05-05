from urllib import request
import requests, dotenv, os

dotenv.load_dotenv()

SHEETY_URL = os.getenv("SHEETY_URL")
SHEETY_AUTHORIZATION = os.getenv("SHEETY_AUTHORIZATION")


class DataManager:
    # This class is responsible for talking to the Google Sheet.
    def get_sheety_data(self):
        # This method will get the data from the Google Sheet.
        response = requests.get(SHEETY_URL, headers={"Authorization": SHEETY_AUTHORIZATION})
        return response.json()

    def update_google_sheets(self, iataCode, id):
        parameters = {
            "price": {
                "iataCode": iataCode,
            },
        }
        response = requests.put(
            url=f"{SHEETY_URL}/{id}", json=parameters, headers={"Authorization": SHEETY_AUTHORIZATION}
        )
