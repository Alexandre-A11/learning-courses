// * INÍCIO - Values and Variables
/*"use strict";

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Alexandre");
console.log(23);

let firstName = "Fernanda";
let first = "Alexandre";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let alexandre_fernanda = "AF";
let $function = 27;

let person = "alexandre";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Coder";
*/

// Nomes de variáveis não podem começar com número.
// Evitar criar variáveis com a primeira letra captalizada
// Evitar usar variável com nome "name"

// FIM

// * INÍCIO - Data Types
/*
"use strict";

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

*/
// FIM

// * INÍCIO - let, const and var
/*
"use strict";

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; const não permite alterar o valor de uma variável.
// const job; const precisa de um valor inicial.

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);

*/
// FIM

// * INÍCIO - Basic Operators
/*
"use strict";

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//  2 ** means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/
// FIM

// * Operator Precedence
/*
"use strict";

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/
// FIM

// * Strings and Template Literals
/*
"use strict";

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
    "I'm " +
    firstName +
    ", a " +
    (year - birthYear) +
    " years old " +
    job +
    "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple 
lines`);

*/
// FIM

// * Taking Decisions: if/else Statements
/*
"use strict";

const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😗`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/
// FIM

// * Type Conversion and Coercion
/*
"use strict";

//  Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); //NaN = Not a Number
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log(`I'm ` + 23 + ` years old.`);
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // "11"
n = n - 1; // 11 - 1
console.log(n);
*/
// firstName

// * Truthy and Falsy Values
/*
"use strict";

// 5 falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
    console.log("Don't spend it all.");
} else {
    console.log("You need money.");
}

let height = 0;
if (height) {
    console.log("Height is Defined!");
} else {
    console.log("Height is Undefined!");
}
*/
// FIM

// * Equality Operators: == vs. ===
/*
"use strict";

const age = "18";

if (age === 18) console.log("You just became an adult 😀 (Strict");

if (age == 18) console.log("You just became an adult 😀 (Loose)");

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number.");
} else if (favourite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("Why not 23?");
*/
// FIM

// * Boolean Logic
// "use strict";
// FIM

// * Logical Operators
/*
"use strict";
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense && !hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense || !hasGoodVision);
console.log(!hasDriversLicense || !hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive.");
// }

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive.");
}
*/
// FIM

// * The switch Statement
/*
"use strict";

const day = "monday";

switch (day) {
    case "monday": // day === "monday"
        console.log("Plan course structure.");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend 😀");
        break;
    default:
        console.log("Not a valid day!");
}

if (day === "monday") {
    console.log("Plan course structure.");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend 😀");
} else {
    console.log("Not a valid day!");
}
*/
// FIM

// * Statements and Expressions
/*
"use strict";
// Expressions = produce a value.
// 3 + 4
// 1991
//  true && false && !false
// Statements don't produce a value.
if (23 > 10) {
    const str = "23 is bigger";
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/
// FIM

// * The Conditional (Ternary) Operator
/*
"use strict";

const age = 15;
age >= 18
    ? console.log("I like to drink wine 🍷")
    : console.log("I like to drink water 💧");

const drink = age >= 18 ? "Wine 🍷" : "Water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "Wine 🍷";
} else {
    drink2 = "Water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "Wine 🍷" : "Water 💧"}`);
*/
// FIM

// * INÍCIO - JavaScript Releases: ES5, ES6+ and ESNext
// Aula Teórica
// FIM
