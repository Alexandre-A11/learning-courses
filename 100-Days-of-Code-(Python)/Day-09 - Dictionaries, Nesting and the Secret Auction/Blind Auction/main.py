import ascii, clear

print(ascii.logo)

bidders = {}

more_bids = True
while more_bids:
    name = input("What is your name?: ")
    bid = float(input("What is your bid?: $"))

    bidders[name] = bid

    more_bidders = input("Are there any other bidders? Type 'yes or 'no'.")
    if more_bidders == "yes":
        clear.clear()
    elif more_bidders == "no":
        more_bids = False


winner = max(bidders, key=bidders.get)


print(f"The winner is {winner} with a bid of ${bidders[winner]}")
