# This file will need to use the DataManager,FlightSearch, FlightData, NotificationManager classes to achieve the program requirements.
import data_manager, flight_search, flight_data, notification_manager


data_manager = data_manager.DataManager()
flight_search = flight_search.FlightSearch()
flight_data = flight_data.FlightData()
notification_manager = notification_manager.NotificationManager()

sheet_data = data_manager.get_sheety_data()

for row in sheet_data["prices"]:
    if not row["iataCode"]:
        row["iataCode"] = flight_search.get_iata_code(row["city"])
        data_manager.update_google_sheets(row["iataCode"], row["id"])

    flight = flight_data.search_flight(row["iataCode"])

    ################
    if flight is None:
        continue
    ################

    print("{0}: £{1}".format(row["city"], flight["price"]))
    if row["lowestPrice"] <= flight["price"]:
        notification_manager.send_msg(
            message=f"Low price alert! Only £{flight['price']} to fly from {flight['departure_city']}-{flight['departure_code']} to {flight['arrivel_city']}-{flight['arrivel_code']}."
        )
