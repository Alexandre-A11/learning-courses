import pandas

data = pandas.read_csv("Squirrel-Census/2018_Central_Park_Squirrel_Census_-_Squirrel_Data.csv")

squirrel_count_dict = {
    "Fur Color": ["Grey", "Red", "Black"],
    "Count": [
        len(data[data["Primary Fur Color"] == "Gray"]),
        len(data[data["Primary Fur Color"] == "Cinnamon"]),
        len(data[data["Primary Fur Color"] == "Black"]),
    ],
}

pandas.DataFrame(squirrel_count_dict).to_csv("Squirrel-Census/squirrel_count.csv")
