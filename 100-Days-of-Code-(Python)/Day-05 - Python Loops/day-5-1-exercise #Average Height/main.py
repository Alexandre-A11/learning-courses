# 🚨 Don't change the code below 👇
student_heights = input("Input a list of student heights ").split()
for n in range(0, len(student_heights)):
    student_heights[n] = int(student_heights[n])
# 🚨 Don't change the code above 👆

#Write your code below this row 👇
# Important You should not use the sum() or len() functions in your answer.
soma = 0
qtd = 0
for height in student_heights:
    soma += height
    qtd += 1

average = round(soma / qtd)
print(average)