# Data Types

# Strings
print("Hello"[0])
print("Hello"[4])

print("123" + "345")

# Integer
print(123 + 345)
print(123_456_789)

# Float
print(3.14159)
print(3141.59)

# Boolean
print(True)
print(False)

######
print("\n")
num_char = len(input("What is your name? "))  # len function won't work with integers.
print(type(num_char))
new_num_char = str(num_char)
print("Your name has " + new_num_char + " characters.")

a = float(123)
print(type(a))

print(70 + float("100.5"))
print(str(70) + str(100))

# Mathematical Operations
print("\n")
print(3 + 5)
print(7 - 4)
print(3 * 2)
print(6 / 3)
print(2 ** 2)

# PEMDAS
# Parentheses
# Exponentes
# Multiplication
# Division
# Addition
# Subtraction

print(3 * (3 + 3) / 3 - 3)
print(round(2.666666, 2))
print(8 / 3)
print(type(8 / 3))
print(8 // 3)
print(type(8 // 3))
