# Read
# Quando o arquivo está na mesma pasta ./ é opcional
with open("./my_file.txt") as file:
    # file = open("my_file.txt") # Com esse método é necessário usar o file.close()
    contents = file.read()
    print(contents)

    # file.close()

# Write
# w = write, a = append, r = read
with open("new_file.txt", mode="w") as file:
    file.write("0")
