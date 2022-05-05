// * LECTURE: Values and Variables

"use strict";

const country = "Brazil";
const continent = "South America";
const population = 213.3;

// console.log(`Country: ${country}\nContinent: ${continent}\nPopulation: ${population}`);

// * LECTURE: Data Types
const isIsland = false;
let language;

// console.log(`isIsland: ${isIsland}\nLanguage: ${language}`);

// * LECTURE: let, const and var
language = "Portuguese";

// * LECTURE: Basic Operators
const halfPopulation = population / 2;
const populationPlusOne = population + 1;
const finland = 6;
const averagePopulation = 33;
// const description = `${country} is in ${continent}, and its ${population} million people speaks ${language}`;

// console.log(halfPopulation, populationPlusOne);
// console.log(population > finland);
// console.log(population > averagePopulation);
// console.log(description);

// * LECTURE: Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speaks ${language}`;

// * LECTURE: Taking Decisions: if / else Statements
// if (population > averagePopulation) {
//     console.log(`${country} population is above average`);
// } else {
//     console.log(
//         `${country} population is ${Math.round(
//             averagePopulation - population
//         )} million below average.`
//     );
// }

// * LECTURE: Type Conversion and Coercion
// 1.Predict the result of these 5 operations without executing them:
// '9' -'5'; = 4
// '19' -'13' + '17'; = 617
// '19' -'13' + 17; = 23
// '123' < 57; = false
// 5 + 6 + '4' + 9 -4 -2; = 1143
// 2.Execute the operations to check if you were right
// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// * LECTURE: Equality Operators: == vs. ===
// const numNeighbours = prompt(
//     "How many neighbour countries does your country have?"
// );

// if (Number(numNeighbours) === 1) {
//     console.log("Only 1 border!'");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No borders");
// }

// * LECTURE: Logical Operators
// if (population < 50 && isIsland === false && language == "English") {
//     console.log(`You should live in ${country} 😀`);
// } else {
//     console.log(`${country} does not meet your criteria 😟`);
// }

// * LECTURE: The switch Statement
/*
switch (language) {
    case "mandarin":
    case "chinese":
        console.log("MOST number of native speakers");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
    case "english":
        console.log("3rd place");
    case "hindi":
        console.log("Number 4");
    case "arabic":
        console.log("5th most spoken language");
    default:
        console.log("Great language too 😀");
}
*/

// * LECTURE: The Conditional (Ternary) Operator
console.log(
    `${country} population is ${
        population > averagePopulation ? "above" : "below"
    } average`
);
