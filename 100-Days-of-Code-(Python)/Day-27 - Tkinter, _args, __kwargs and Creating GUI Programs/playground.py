def add(*args):
    print(args[0])
    print(sum(args))
    print(type(args))


add(3, 5, 6)

# *args retorna como tuple
# **kwargs retorna como dicionário


def calculate(n, **kwargs):
    print(kwargs)
    print(type(kwargs))
    for key, value in kwargs.items():
        print(key, value)
    n += kwargs["add"]
    n *= kwargs["multiply"]
    print(n)


calculate(2, add=3, multiply=5)


class Car:
    def __init__(self, **kw):
        self.make = kw["make"]  # Obrigatório
        self.model = kw.get("model")  # Opcional, retorna como None não seja especificado quando chamado.
        self.color = kw.get("color")
        self.seats = kw.get("seats")


my_car = Car(make="Nissan", model="GT-8")
print(my_car.model)
print(my_car.color)
