//  1 - numbers
let x: number = 10;

console.log(x);

x = 15;

console.log(typeof x);

const y: number = 15.456454;

console.log(typeof y);

console.log(y);

console.log(y.toPrecision(3));

//  2 - string
const firstName: string = "John";

console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Smith";

fullName = firstName + " " + lastName;

console.log(fullName);

console.log(typeof fullName);

// 3 - boolean
let a: boolean = false;

console.log(a);
console.log(typeof a);

a = true;

console.log(a);

// 4 -  annotation & inference
const annotation: string = "Teste";

const inference = "Teste";
