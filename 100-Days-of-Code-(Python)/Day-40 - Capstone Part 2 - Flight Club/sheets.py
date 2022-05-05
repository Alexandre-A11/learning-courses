import requests, dotenv, os

dotenv.load_dotenv()
URL = os.getenv("SHEETY_URL")
HEADERS = {"Authorization": os.getenv("SHEETY_AUTORIZATION")}


class Sheets:
    def __init__(self, f_name, l_name, email):
        self.params = {
            "user": {
                "firstName": f_name,
                "lastName": l_name,
                "email": email,
            }
        }
        self.add_row()

    def add_row(self):
        # print(self.params)
        response = requests.post(URL, headers=HEADERS, json=self.params)
        # response.raise_for_status()
