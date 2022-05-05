# Functions with Outputs
def formart_name(first_name, last_name):
    """Take a first and last name and format it to return the title
    case version of the name."""
    if first_name == "" or last_name == "":
        return "You didn't provide valid inputs"
    formated_f_name = first_name.title()
    formated_l_name = last_name.title()

    return f"{formated_f_name} {formated_l_name}"


print(
    formart_name(
        input("What is your first name? "),
        input("What is your last name? "),
    )
)
