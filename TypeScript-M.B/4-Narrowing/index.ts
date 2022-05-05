// # 1 - Type guard
function sum(a: number | string, b: number | string) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    } else {
        console.log("Invalid input");
    }
}

sum("4", "29");
sum(12, 42.3);
sum("5", 6);

// # 2 - Verificar se valor existe
function operations(arr: number[], operation?: string | undefined) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        } else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    } else {
        console.log("Invalid input");
    }
}

operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([1, 2, 3], "multiply");

// # 3 - Instance of
class User {
    name;
    constructor(name: string) {
        this.name = name;
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name);
    }
}

const jhon = new User("John");
const paul = new SuperUser("Paul");

console.log(jhon);
console.log(paul);

function userGreeting(user: object) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, seja bem vindo ao sistema! (SuperUser)`);
    } else if (user instanceof User) {
        console.log(`Olá ${user.name}, seja bem vindo! (User)`);
    }
}

// # 4 - Operador in
class Dog {
    name;
    breed;

    constructor(name: string, breed?: string) {
        this.name = name;

        if (breed) {
            this.breed = breed;
        }
    }
}

const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");

function showDogDetails(dog: Dog) {
    if ("breed" in dog) {
        console.log(`${dog.name} is a ${dog.breed}`);
    } else {
        console.log(`${dog.name} is a SRD`);
    }
}

console.log(turca);
console.log(bob);
