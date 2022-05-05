programming_dictionary = {
    "Key": "Value",
    "Bug": "An error in a program that prevents the program from running as expected.",
    "Function": "A piece of code that you can easily call over and over again.",
}

# print("Key: Value")

# ? Retrieving items from dictionary
# print(programming_dictionary["Bug"])

# ? Adding new items to dictionary.
programming_dictionary["Loop"] = "The action of doing something over and over again."
# print(programming_dictionary)

# ? Create an empty dictionary.
empty_dictionary = {}

# ? Wipe an existing dictionary
# programming_dictionary = {}
# print(programming_dictionary)

# ? Edit an item in a empty_dictionary
programming_dictionary["Bug"] = "A moth in your computer."
# print(programming_dictionary)

# ? Loop through a dictionary
# for key in programming_dictionary:
#     print(key)
#     print(programming_dictionary[key])

# ? Nesting
capitals = {
    "France": "Paris",
    "Germany": "Berlin",
}

# ? Nesting a List in a Dictionary
travel_log = {
    "France": ["Paris", "Lille", "Dijon"],
    "Germany": ["Berlin", "Hamburg", "Stuttgart"],
}

# ? Nesting a Dictionary in a Dictionary
travel_log = {
    "France": {
        "cities_visited": ["Paris", "Lille", "Dijon"],
        "total_visits": 12,
    },
    "Germany": {
        "cities_visited": ["Berlin", "Hamburg", "Stuttgart"],
        "total_visits": 5,
    },
}

# ? Nesting Dictionary in a List
travel_log = [
    {
        "country": "France",
        "cities_visited": ["Paris", "Lille", "Dijon"],
        "total_visits": 12,
    },
    {
        "country": "Germany",
        "cities_visited": ["Berlin", "Hamburg", "Stuttgart"],
        "total_visits": 5,
    },
]

# ? USE max() AND dict.get TO FIND THE KEY WITH THE MAX VALUE IN A DICTIONARY
a_dictionary = {"a": 1, "b": 2, "c": 3}

max_key = max(a_dictionary, key=a_dictionary.get)
# get key with max value


print(max_key)

# ? USE max() AND dict.values() TO FIND THE MAX VALUE IN A DICTIONARY
a_dictionary = {"a": 1, "b": 2, "c": 3}

all_values = a_dictionary.values()
print(all_values)
max_value = max(all_values)
# all_values is a list


print(max_value)
