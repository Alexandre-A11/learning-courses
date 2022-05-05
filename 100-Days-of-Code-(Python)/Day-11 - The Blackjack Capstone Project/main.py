############### Our Blackjack House Rules #####################

# The deck is unlimited in size.
# There are no jokers.
# The Jack/Queen/King all count as 10.
# The the Ace can count as 11 or 1.
# Use the following list as the deck of cards:
## cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
# The cards in the list have equal probability of being drawn.
# Cards are not removed from the deck as they are drawn.
# The computer is the dealer.
import art, random
from clear_console import clear


def blackjack():
    def show_scores():
        print(f"Your final hand: {player_hand}, final score: {player_score}")
        print(f"Computer's final hand: {computer_hand}, final score: {computer_score}")

    cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

    player_hand = random.sample(cards, 2)
    computer_hand = random.sample(cards, 2)

    # Repeat
    game_on = True
    while game_on:
        player_score = sum(player_hand)
        computer_score = sum(computer_hand)

        print(f"Your cards: {player_hand}, current score: {player_score}\nComputer's first card: {computer_hand[0]}")

        # BlackJack
        if len(player_hand) == 2 and len(computer_hand) == 2:
            if player_score == 21 and computer_score == 21:
                return print("Draw! Both has BlackJacks 😶")
            elif player_score == 21:
                return print("You win with BlackJack 😎")
            elif computer_score == 21:
                return print(f"Computer has BlackJack: {computer_hand}. You Lose 😨")

        # Ace
        if player_score > 21 and 11 in player_hand:
            player_hand[player_hand.index(11)] = 1

        # Player Score
        if player_score > 21:
            show_scores()
            return print("You went over. You lose 😫")

        if input("Type 'y' to get another card, type 'n' to pass: ") == "y":
            player_hand.append(random.choice(cards))
        else:
            game_on = False
        # End Repeat

    # Computers Score
    while computer_score < 17:
        computer_hand.append(random.choice(cards))
        computer_score = sum(computer_hand)

    show_scores()
    if computer_score > 21:
        return print("Opponent went over. You win 😁 ")
    elif computer_score == player_score:
        return print("Draw. 🤨")
    elif player_score > computer_score:
        return print("You win. 😀")
    else:
        return print("You lose. 😧")


while input("Do you want to play a game of Blackjack? Type 'y' or 'n': ").lower() == "y":
    clear()
    print(art.logo)
    blackjack()
