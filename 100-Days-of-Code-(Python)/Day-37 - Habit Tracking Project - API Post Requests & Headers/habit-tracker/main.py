from wsgiref import headers
import requests, dotenv, os, datetime

dotenv.load_dotenv()

PIXELA_ENDPOINT = "https://pixe.la/v1/users"
GRAPH_ENDPOINT = f"{PIXELA_ENDPOINT}/{os.environ.get('PIXELA_USERNAME')}/graphs"

## Create us
user_params = {
    "token": os.environ.get("TOKEN"),
    "username": os.environ.get("PIXELA_USERNAME"),
    "agreeTermsOfService": "yes",
    "notMinor": "yes",
}

# response = requests.post(PIXELA_ENDPOINT, json=user_params)
# print(response.text)


## Create a graph
graph_params = {
    "id": "graph-day-37",
    "name": "Projeto Habit Tracker",
    "unit": "commit",
    "type": "int",
    "color": "ajisai",
}

headers = {
    "X-USER-TOKEN": user_params["token"],
}
# response = requests.post(url=GRAPH_ENDPOINT, json=graph_params, headers=headers)
# print(response.text)

## Commit a Date
PIXEL_GRAPH_ENDPOINT = f"{GRAPH_ENDPOINT}/{graph_params['id']}"

today = datetime.datetime.now().strftime("%Y%m%d")
pixel_graph_params = {
    "date": today,
    "quantity": "9",
}

# response = requests.post(url=PIXEL_GRAPH_ENDPOINT, json=pixel_graph_params, headers=headers)
# print(response.text)

## Update Pixel
pixel_update_params = {
    "quantity": "18",
}

# response = requests.put(url=f"{PIXEL_GRAPH_ENDPOINT}/20220327", json=pixel_update_params, headers=headers)
# print(response.text)

## Delete Pixel
# response = requests.delete(url=f"{PIXEL_GRAPH_ENDPOINT}/20220101", headers=headers)
# print(response.text)

print(f"https://pixe.la/@{user_params['username']}")
