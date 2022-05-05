from data import MENU, resources, money_machine


# Functions
def resources_function(drink, do):
    """do == 'check': Check if the amount of resourcers is sufficient
    do == 'update': Remove resources used"""
    ingredients = MENU[drink]["ingredients"]

    if do == "check":
        for key in resources:
            if key in ingredients and ingredients[key] > resources[key]:
                print(f"Sorry there is not enough {key}.")
                return False
        return True
    elif do == "update":
        for key in resources:
            if key in ingredients:
                resources[key] -= ingredients[key]


def add_money():
    """Ask the amount of money and return the sum."""
    print("Please insert the coins:")
    quarters = float(input("How many quarters?: ")) * 0.25
    dimes = float(input("How many dimes?: ")) * 0.1
    nickles = float(input("How many nickles?: ")) * 0.05
    pennies = float(input("How many pennies?: ")) * 0.01
    return quarters + dimes + nickles + pennies


# Start
machine_on = True
while machine_on:
    drink_choice = input("What would you like? (espresso/latte/cappuccino): ").lower()

    if drink_choice == "off":
        machine_on = False
        # break
    elif drink_choice == "report":
        print(
            f'Water: {resources["water"]}ml\nMilk: {resources["milk"]}ml\nCoffe: {resources["coffee"]}g\nMoney: ${money_machine}'
        )
    elif drink_choice != "espresso" and drink_choice != "latte" and drink_choice != "cappuccino":
        print("Invalid Request.")
    else:
        if resources_function(drink_choice, "check"):
            money_added = add_money()
            drink_price = MENU[drink_choice]["cost"]
            if money_added >= drink_price:
                money_machine += drink_price
                resources_function(drink_choice, "update")
                print(f"Here is ${round(money_added - drink_price, 2)} in change.")
                print(f"Here is your {drink_choice} ☕. Enjoy!")

            else:
                print("Sorry that's not  enough money. Money refunded.")
