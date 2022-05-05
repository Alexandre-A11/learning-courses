#Write your code below this line 👇
def prime_checker(number):
    divisables = [i for i in range(2, number // 2 + 1) if number % i == 0]

    divisables.insert(0, 1)  # (index, number)
    if number not in divisables:
        divisables.append(number)
    print(divisables)

    if len(divisables) == 2:
        print("It's a prime number.")
    else:
        print("It's not a prime number.")


#Write your code above this line 👆

#Do NOT change any of the code below👇
n = int(input("Check this number: "))
prime_checker(number=n)

# ? List Comprehension
# Sintaxes possíveis
# [expressão for cada elemento in lista if condição]
# [expressão if condição else expressão for elemento in lista]