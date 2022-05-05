# Calculator
import art


# Add
def add(n1, n2):
    return n1 + n2


# Subtract
def subtract(n1, n2):
    return n1 - n2


# Multiply
def multiply(n1, n2):
    return n1 * n2


# Divide
def divide(n1, n2):
    return n1 / n2


operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
}


def Calculator():
    print(art.logo)
    # Ask the user for the first number
    num1 = float(input("What's the first number?: "))

    # show symbols of operations
    for key in operations:
        print(key)

    should_continue = True
    while should_continue:
        # Ask the user for the symbol
        operation_symbol = input("Pick an operation from the line above: ")

        # Ask the user for the second number
        num2 = float(input("What's the next number?: "))

        # Look dictionary "operations" in position choosed by the user "operation_symbol" with the arguments "num1, num2"
        # after that the fuction choosed is activated
        answer = operations[operation_symbol](num1, num2)

        print(f"{num1} {operation_symbol} {num2} = {answer}")

        if input(f"Type 'y to continue calculating with {answer}:, or type 'n' to start a new calculation:  ") == "y":
            num1 = answer
        else:
            should_continue = False
            Calculator()


Calculator()
