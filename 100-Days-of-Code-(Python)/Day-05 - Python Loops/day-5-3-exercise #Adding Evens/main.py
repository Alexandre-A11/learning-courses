# Método 1:
total = 0
for number in range(0, 101, 2):
    total += number
print(total)

# Método 2:
total = 0
for number in range(1, 100 + 1):
    if number % 2 == 0:
        total += number
print(total)