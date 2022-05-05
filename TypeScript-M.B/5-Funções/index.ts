// # 1 - Void
function withoutReturn(): void {
    console.log("Esta função não retorna nenhum valor");
    // return 1 //! error
}

withoutReturn();

// # 2 - Callback como argumento
function greeting(name: string): string {
    return `Hello ${name}`;
}

function sayHello(callback: (name: string) => string, userName: string) {
    console.log("Preparando para chamar a função callback");

    const greet = callback(userName);

    console.log(greet);
}

sayHello(greeting, "John");
sayHello(greeting, "Jane");

// # 3 - Generic functions
function firstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(["John", "Jane", "Mary"]));
// console.log(firstElement("true")); //! error

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return { ...obj1, ...obj2 };
}

const newObject = mergeObjects({ name: "John" }, { age: 30, job: "Developer" });

console.log(newObject);

// # 4 - Constraints nas Generics functions
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T;

    if (+a > +b) {
        biggest = a;
    } else {
        biggest = b;
    }

    return biggest;
}

console.log(biggestNumber(1, 2));
console.log(biggestNumber("1", "2"));
// console.log(biggestNumber(2, "3")); //! error

// # 5 - Definindo tipos de parâmetros
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ["casa", "sofá", "tv"]));

// # 6 - Parâmetros opcionais
function modernGreeting(name: string, greet?: string) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }

    return `Olá ${name}, tudo bem?`;
}

console.log(modernGreeting("John"));
console.log(modernGreeting("John", "Dr."));

// # 7 - Parâmetros default
function sum(a: number, b = 10): number {
    return a + b;
}

console.log(sum(1));
console.log(sum(1, 5));
// console.log(sum(1, "5")); //! error

// # 8 - Tipo Unknown
function doSomething(x: unknown) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    } else if (typeof x === "number") {
        console.log(x);
    }
}

doSomething([10, 20, 30]);
doSomething(3);

// # 9 - Never
function throwError(message: string): never {
    throw new Error(message);
}

// throwError("Ooops");

// # 10 - Rest parameters
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr);
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// # 11 - Destructuring em parâmetros

function showProductDetails({ name, price }: { name: string; price: number }):string { 
    return `${name} custa R$ ${price} `;
} // prettier-ignore

const shirt = { name: "Camisa", price: 49.99 };

console.log(showProductDetails(shirt));
