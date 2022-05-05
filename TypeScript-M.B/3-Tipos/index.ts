// # 1 - arrays

let numbers: number[] = [1, 2, 3];

numbers.push(5);

console.log(numbers[2]);

// numbers= "teste"; // ! error

const nomes: string[] = ["João", "Pedro", "Maria"];

// # 2 - outra sintaxe array

const num: Array<number> = [100, 200];

num.push(300);

// # 3 - any

const arr1: any = [1, "teste", true];

console.log(arr1);

arr1.push([1, 2, 3]);

// # 4 - parametros tipados

function soma(a: number, b: number) {
    console.log(a + b);
}

soma(4, 5);

// # 5 - retorno função

function greeting(name: string): string {
    return `Hello ${name}`;
}

console.log(greeting("João"));

// # 6 - função anônima

setTimeout(function () {
    const sallary: number = 1000;

    // console.log(parseFloat(sallary)); // parseFloat Converts a string to a floating-point number. // ! error
    // console.log(sallary);
}, 2000);

// # 7 - Tipos de Objetos

function passCoordinates(coord: { x: number; y: number }) {
    console.log("X coordinate: " + coord.x);
    console.log("Y coordinate: " + coord.y);
}

const objCoord = { x: 329, y: 84.2 };

passCoordinates(objCoord);

const pessoaObj: { nome: string; surname: string } = {
    nome: "João",
    surname: "Silva",
};

// # 8 - Propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);
}

console.log(1, 2, 3);
console.log(4, 5);

// # 9 - Validando argumento opcional
function advancedGreeding(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
        return `Hello ${firstName} ${lastName}`;
    }

    return `Hello ${firstName}`;
}

console.log(advancedGreeding("João", "Silva"));
console.log(advancedGreeding("João"));

// # 10 - Union type
function showBalance(balance: number | string) {
    console.log(`Your balance is ${balance}`);
}

showBalance(100);
showBalance("100");

// # 11 - Avançando com Union types
function showBalance2(role: boolean | string) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }

    return `A função do usuário é: ${role}`;
}

console.log(showBalance2(false));
console.log(showBalance2("Administrador"));

// # 12 - Type alias
type ID = number | string;

function showId(id: ID) {
    console.log(`ID: ${id}`);
}

showId(1);
showId("200");
showId(123);

// # 13 - Interfaces
interface Point {
    x: number;
    y: number;
    z: number;
}

function showCoords(obj: Point) {
    console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`);
}

const coordObject: Point = {
    x: 10,
    y: 20,
    z: 30,
};

// # 14 - Interface X Type alias
interface Person {
    name: string;
}

interface Person {
    // Possível fazer modificações/Soma de interfaces // ✅
    age: number;
}

const somePerson: Person = { name: "Ryuu", age: 30 };

type personType = {
    name: string;
};

// type personType = {  // Não é possível fazer modificação em Type alias // ! error
//     age: number;
// };

// # 15 - Literal Types
let teste: "Testando";

// teste = "a"; // ! error
teste = "Testando";

console.log(teste);

function showDirection(direction: "N" | "S" | "E" | "W") {
    console.log(`A direção é: ${direction}`);
}

showDirection("N");
// showDirection("Norte"); // ! error

// # 16 - Non-null Assertion Operator
const p = document.getElementById("some-p");

console.log(p!.innerText);

// # 17 - Bigint
let n: bigint;

// n = 1

n = 1000n;

console.log(n);

console.log(typeof n);

console.log(n + 100n);

// # 18 - Symbol
let symbolA: symbol = Symbol("A");
let symbolB = Symbol("A");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
