# 🚨 Don't change the code below 👇
weight = float(input("enter your weight in kg: "))
height = float(input("enter your height in m: "))
# 🚨 Don't change the code above 👆

#Write your code below this line 👇
bmi = round(weight / height**2)

if bmi < 18.5:
    interpretation = "you are underweight."
elif bmi < 25:
    interpretation = "you have a normal weight."
elif bmi < 30:
    interpretation = "you are slightly overweight."
elif bmi < 35:
    interpretation = "you you are obese."
else:
    interpretation = "you are clinically obese."

print(f"Your BMI is {bmi}, {interpretation}")