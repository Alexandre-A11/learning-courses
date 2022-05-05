# Write your code above 👆
with open("day-26-3-exercise #Dictionary Comprehension 1 /file1.txt") as file:
    file1 = file.readlines()

with open("day-26-3-exercise #Dictionary Comprehension 1 /file2.txt") as file:
    file2 = file.readlines()


result = [int(num) for num in file1 if num in file2]
print(result)
