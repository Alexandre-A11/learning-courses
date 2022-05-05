# 🚨 Don't change the code below 👇
two_digit_number = input("Type a two digit number: ")
# 🚨 Don't change the code above 👆

####################################
#Write your code below this line 👇

# Método 1:
print(two_digit_number)
print(type(two_digit_number))
somar = 0
for number in two_digit_number:
    somar += int(number)
print(f"Sum: {somar}")

# Método 2:
soma_facil = [int(string) for string in two_digit_number]
print(soma_facil)
print(f"Soma: {sum(soma_facil)}")