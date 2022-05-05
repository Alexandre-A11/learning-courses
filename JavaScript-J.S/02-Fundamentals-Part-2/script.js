// * Activating Strict Mode
/*
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive. 🚗");

// const interface = "Audio";
// const private = 543;
*/
// FIM

// * Functions
/*
"use strict";

function logger() {
    console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/
// FIM

// * Function Declarations vs. Expressions
/*
"use strict";

//? Function Declaration
// Can be called before the function.
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}

const age1 = calcAge1(1991);

//? Function Expression
// Can't be called before the function.
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
};

const age2 = calcAge2(1991);

console.log(age1, age2);
*/
// FIM

// * Arrow Functions
/*
"use strict";
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/
// FIM

// * Functions Calling Other Functions
/*
"use strict";

function cutFruitPieces(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applesPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applesPieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/
// FIM

// * Reviewing Functions
/*
"use strict";

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }

    // return 
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Mike"));
*/
// FIM

// * Introduction to Arrays
/*
"user strict";

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years01 = new Array(1991, 1984, 2008, 2020);
console.log(years01);

console.log(`${friends[0]}\n${friends[1]}\n${friends[2]}`);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"] // Can't do.

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[years.length - 1]),
];
console.log(ages);
*/
// FIM

// * Basic Array Operations (Methods)
/*
"use strict";

// Add elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay"); // returns num of elements in the array
console.log(friends);
console.log(newLength);

friends.unshift("John"); // returns num of elements in the array
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven.");
}
*/
// FIM

// * Introduction to Objects
/*
"use strict";

// Objetos == Dicionários em Python 🤔
// Arrays(Lists in Python) orders matters, Objects don't.
// Arrays(Listas em Python) ordem importa, em Objetos não, ordem alfabética automáticamente.
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);
*/
// FIM

// * Dot vs. Bracket Notation
/*
"use strict";
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//     "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends."
// );
// console.log(jonas.interestedIn); // Won't work.

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log(
//         "Wrong request! Choose between firstName, lastName, age, job, and friends."
//     );
// }

// Add to objects
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
    `${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`
);
*/
// FIM

// * Objects Methods
/*
"use scripts";

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: false,

    // Any function attached to a object is called a method.
    
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // },
    

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // },
    

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        this.age = 2037 - this.birthYear;
        this.license = this.hasDriversLicense ? "a" : "no";
        return `${this.firstName} is an ${this.calcAge()} year old ${
            this.job
        }, and he has ${this.license} driver's license.`;
    },
};

// console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));

console.log(jonas.calcAge()); // example with this

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is an 46 year old teacher, and he has a/no driver's license."

console.log(jonas.getSummary());
*/
// FIM

// * Iteration: The for Loop
/*
"use strict";

// console.log("Lifting weights repetition 1 🏋️‍♂️‍");
// console.log("Lifting weights repetition 2 🏋️‍♂️‍");
// console.log("Lifting weights repetition 3 🏋️‍♂️‍");
// console.log("Lifting weights repetition 4 🏋️‍♂️‍");
// console.log("Lifting weights repetition 5 🏋️‍♂️‍");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/

// FIM

// * Looping Arrays, Breaking and Continuing
/*
"use strict";

const jonasArray = [
    "Jonas", // String
    "Schmedtmann", // String
    2037 - 1991, // Number
    "Teacher", // String
    ["Michael", "Peter", "Steven"], // Object
    true, // Boolean
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);

    // ? Filling types array
    // types[i] = typeof jonasArray[i]; // Method 1.
    types.push(typeof jonasArray[i]); // Method 2.
}

console.log(types);

const years = [1990, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// ? Continue and Break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== "string") continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("--- BREAK WITH NUMBER---");
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === "number") break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}
*/
// FIM

// * Looping Backwards and Loops in Loops
/*
"use strict";

const jonasArray = [
    "Jonas", // String
    "Schmedtmann", // String
    2037 - 1991, // Number
    "Teacher", // String
    ["Michael", "Peter", "Steven"], // Object
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------- Starting exercise ${exercise}:`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(
            `Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`
        );
    }
}
*/
// FIM

// * The while Loop
/*
"use strict";

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

let rep = 1;
while (rep <= 10) {
    console.log(`While: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end...");
}
*/
// FIM
