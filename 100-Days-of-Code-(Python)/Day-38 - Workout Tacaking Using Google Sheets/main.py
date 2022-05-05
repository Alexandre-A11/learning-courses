import requests, dotenv, os, datetime

dotenv.load_dotenv()

# Exercise Endpoints
NUTRITIONIX_ENDPOINT = "https://trackapi.nutritionix.com/v2/natural/exercise"

headers = {
    "x-app-id": os.getenv("NUTRITIONIX_ID"),
    "x-app-key": os.environ.get("NUTRITIONIX_KEY"),
}
nutritionix_params = {
    "query": input("Tell me which exercise you did: "),
    "gender": os.getenv("GENDER"),
    "weight_kg": os.getenv("WEIGHT_KG"),
    "height_cm": os.getenv("HEIGHT_CM"),
    "age": os.getenv("AGE"),
}

response = requests.post(url=NUTRITIONIX_ENDPOINT, headers=headers, json=nutritionix_params)
nutritionix_data = response.json()

## Add a row to Google Sheets with Sheety API
headers = {"Authorization": "Bearer " + os.getenv("SHEETY_KEY")}


add_row_params = {
    "workout": {
        "date": datetime.datetime.now().strftime("%d/%m/%Y"),
        "time": datetime.datetime.now().strftime("%X"),
        "exercise": nutritionix_data["exercises"][0]["name"].title(),
        "duration": round(nutritionix_data["exercises"][0]["duration_min"]),
        "calories": nutritionix_data["exercises"][0]["nf_calories"],
    }
}


response = requests.post(
    url=os.getenv("SHEETY_ENDPOINT"),
    headers=headers,
    json=add_row_params,
)
row = response.json()
# i ran 3 miles and walked 2 miles
