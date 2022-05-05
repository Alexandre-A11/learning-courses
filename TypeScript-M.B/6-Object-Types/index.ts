// # 1 - Tipo de Objeto para função com interface
interface Product {
    name: string;
    price: number;
    isAvailable: boolean;
}

function showProductDetails(product: Product) {
    console.log(`O produto ${product.name} custa R$ ${product.price}`);
    if (product.isAvailable) {
        console.log(`O produto ${product.name} está disponível`);
    }
}

const shirt: Product = {
    name: "Camiseta",
    price: 100,
    isAvailable: true,
};

showProductDetails(shirt);
showProductDetails({ name: "Calça", price: 200, isAvailable: false });

// # 2 - Propriedade opcional em Interface
interface User {
    email: string;
    role?: string;
}

function showUserDetails(user: User) {
    console.log(`O usuário ${user.email}`);

    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}

const u1: User = { email: "alexandre@email.com", role: "Admin" };
const u2: User = { email: "karen@email.com" };

showUserDetails(u1);
showUserDetails(u2);

// # 3 - Readonly
interface Car {
    brand: string;
    readonly wheels: number;
}

const fusca: Car = {
    brand: "Volkswagen",
    wheels: 4,
};

console.log(fusca);

// fusca.wheels = 5 //! error

// # 4 - Index signature
interface CoordObject {
    [index: string]: number;
}

let coords: CoordObject = {
    x: 10,
};

coords.y = 15;

console.log(coords);

// # 5 - Extending Types
interface Human {
    name: string;
    age: number;
}

interface SuperHuman extends Human {
    superPowers: string[];
}

const lucas: Human = {
    name: "Lucas",
    age: 25,
};

console.log(lucas);

const goku: SuperHuman = {
    name: "Goku",
    age: 50,
    superPowers: ["Kamehameha", "Genki Dama"],
};

console.log(goku);
console.log(goku.superPowers);

// # 6 - Intersection Types
interface Character {
    name: string;
}

interface Gun {
    type: string;
    caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "AK-47",
    caliber: 7.62,
};

console.log(arnold);
console.log(arnold.type);

// # 7 - Readonly Array
// Pode ser alterado por métodos como .map(), forEach(), etc, mas não diretamente.
let myArray: ReadonlyArray<string> = ["Maçã", "Banana", "Uva"];

// myArray[3] = "Laranja"; //! error

myArray.forEach((item) => console.log("Fruta: " + item));

console.log(myArray);

myArray = myArray.map((item) => {
    return "Fruta: " + item;
});

console.log(myArray);

// # 8 - Tuplas
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];

type nameAndAge = [string, number];

const anotherUser = ["Italo", 28];

console.log(anotherUser[0]);

anotherUser[0] = "Gustavo";

console.log(anotherUser[0]);

// # 9 - Tuplas com Readonly
function showNumbers(numbers: readonly [number, number]) {
    // numbers[0] = 10;
    console.log(numbers[0]);
    console.log(numbers[1]);
}

showNumbers([1, 2]);
