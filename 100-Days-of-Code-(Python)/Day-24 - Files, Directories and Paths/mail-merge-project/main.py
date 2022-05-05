# TODO: Create a letter using starting_letter.txt
# for each name in invited_names.txt
# Replace the [name] placeholder with the actual name.
# Save the letters in the folder "ReadyToSend".

# * Hint1: This method will help you: https://www.w3schools.com/python/ref_file_readlines.asp
# * Hint2: This method will also help you: https://www.w3schools.com/python/ref_string_replace.asp
# * Hint3: THis method will help you: https://www.w3schools.com/python/ref_string_strip.asp

# ? readlines() method returns a list containing each line in the file as a list item.
# ? replace() method replaces a specified phrase with another specified phrase.
# Ex: string.replace(oldvalue, newvalue, count)
# ? strip() method removes any leading (spaces at the beginning) and trailing (spaces at the end) characters (space is the default leading character to remove)
# Ex: string.strip(characters)

# Start Code
with open("mail-merge-project/Input/Names/invited_names.txt") as file_names:
    all_names = file_names.readlines()

with open("mail-merge-project/Input/Letters/starting_letter.txt") as file_letter:
    letter = file_letter.read()

for name in all_names:
    with open(f"mail-merge-project/Output/ReadyToSend/letter_for_{name}.txt", mode="w") as new_letter:
        new_letter.write(letter.replace("[name]", name.strip()))
