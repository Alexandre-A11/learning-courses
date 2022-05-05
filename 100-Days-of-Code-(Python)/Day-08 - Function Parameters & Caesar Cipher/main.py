# Review:
# Create a function called greet().
# Write 3 print statements inside the function.
# Call the greet() function and run your code.

## Simple Function
# def greet():
#     print("Hello")
#     print("How do you do?")
#     print("Isn't the weather nice today?")

# greet()

## Function that allows for input
# def greet_with_name(name):  # ? name = Parameter
#     print(f"Hello {name}")
#     print(f"How do you do {name}?")

## greet_with_name("Angela")  # ? Angela = Argument


# Functions with more than 1 input
def greet_with(name, location):
    print(f"Hello {name}!")
    print(f"What is like in {location}?")


greet_with("Jack Bauer", "Nowhere")  # Positional Argument

## Functions with keyword arguments
greet_with(location="Nowhere", name="Jack Bauer")