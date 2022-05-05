import art, data, random, os


# Functions
def clear():
    os.system("cls" if os.name == "nt" else "clear")


def show_compare():
    for i in range(len(compare)):
        print(
            f'Compare {"A" if i == 0 else "B"}: {compare[i]["name"]}, a {compare[i]["description"]}, from {compare[i]["country"]}.'
        )
        print(art.vs) if i == 0 else None


# Start
score = 0
game_over = False
recycle_b = None
print(art.logo)
while not game_over:
    compare = random.sample(data.data, 2)
    a = compare[0] if recycle_b == None else recycle_b
    b = compare[1]

    compare[0] = a

    show_compare()

    # print(f'Cheat: A: {a["follower_count"]} followers, B: {b["follower_count"]} followers.')
    answer = input("Who has more followers? Type 'A' or 'B': ").lower()
    answer = a if answer == "a" else b

    if answer["follower_count"] == max(a["follower_count"], b["follower_count"]):
        score += 1
        clear()
        print(art.logo)
        print(f"You're right! Current score: {score}.")
    else:
        game_over = True
        print(f"Sorry, that's wrong. Final score: {score}.")

    recycle_b = b
