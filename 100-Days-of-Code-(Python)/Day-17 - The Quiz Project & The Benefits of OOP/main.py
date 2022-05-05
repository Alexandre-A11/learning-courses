class User:
    def __init__(self, user_id, username):
        # print("new user being created...")
        self.id = user_id
        self.username = username
        self.followers = 0
        self.following = 0
    
    def follow(self, user):
        user.followers += 1
        self.following += 1


# user_1 = User()
# user_1.id = "001"
# user_1.username = "angela"


# user_2 = User()
# user_2.id = "002"
# user_2.username = "alexandre"

user_1 = User("001", "angela")
user_2 = User("002", "jack")

user_1.follow(user_2)

print(f"ID: {user_1.id}\nUsername: {user_1.username}\nFollowers: {user_1.followers}\nFollowing: {user_1.following}\n")
print(f"ID: {user_2.id}\nUsername: {user_2.username}\nFollowers: {user_2.followers}\nFollowing: {user_2.following}")