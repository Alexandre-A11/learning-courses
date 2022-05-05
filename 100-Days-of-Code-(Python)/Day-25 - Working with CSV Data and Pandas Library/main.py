# with open("weather_data.csv") as csv_file:
#     weather_week = csv_file.readlines()
#     print(weather_week)

# Classic Way
import csv

with open("weather_data.csv") as csv_file:
    data_object = csv.reader(csv_file)
    temperatures = []
    for row in data_object:
        print(row)
        if row[1] != "temp":
            temperatures.append(int(row[1]))
    print(temperatures)


# Pandas
import pandas

data = pandas.read_csv("weather_data.csv")
print(data)
print(data["temp"])

data_dict = data.to_dict()
print(data_dict)

temp_list = data["temp"].to_list()
print(temp_list)

temp_mean = data["temp"].mean()
print(temp_mean)

temp_max = data["temp"].max()
print(temp_max)

# Get Data in Columns
print(data["condition"])
print(data.condition)

# Get Data in Row
print(data[data["day"] == "Monday"])
print(data[data.temp == data.temp.max()])

monday = data[data.day == "Monday"]
print(monday.condition)

print(monday.temp * 1.8 + 32)

# Create a DataFrama from scratch
data_dict = {
    "students": ["Amy", "James", "Angela"],
    "scores": [76, 56, 65],
}

data = pandas.DataFrame(data_dict)
print(data)
data.to_csv("new_data.csv")
