# ๐จ Don't change the code below ๐
year = int(input("Which year do you want to check? "))
# ๐จ Don't change the code above ๐

#Write your code below this line ๐
if year % 4 == 0:
    if year % 100 == 0:
        if year % 400 == 0:
            print("Leap Year! ๐")
        else:
            print("Not Leap Year! ๐คจ")
    else:
        print("Leap Year! ๐")
else:
    print("Not Leap Year! ๐คจ")
