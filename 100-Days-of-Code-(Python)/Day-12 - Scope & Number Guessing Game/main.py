################### Scope ####################

enemies = 1


def increase_enemies():
    enemies = 2
    print(f"enemies inside function: {enemies}")


increase_enemies()
print(f"enemies outside function: {enemies}")


## Local Scope
# def drink_potion():
#     portion_strength = 2
#     print(portion_strength)


# drink_potion()
# print(portion_strength)


## Global Scope
# player_health = 100


# def game():
#     def drink_potion():
#         potion_strength = 2
#         print(player_health)

#     drink_potion()


# print(player_health)


# There is no Block Scope
# game_level = 3


# def create_enemy():
#     enemies = ["Skeleton", "Zombie", "Alie"]
#     if game_level < 5:
#         new_enemy = enemies[0]


# print(new_enemy)

## Modifying Global Scope
# enemies = 1


# def increase_enemies():
#     # global enemies
#     # enemies += 1  # Not change without "global", created a new variable.
#     print(f"enemies inside function: {enemies}")
#     return enemies + 1


# increase_enemies()
# print(f"enemies outside function: {enemies}")


# Global Constants
PI = 3.14159
URL = "https://www.google.com"
