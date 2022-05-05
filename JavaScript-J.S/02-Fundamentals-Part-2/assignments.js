// * LECTURE: Functions;
/*
"use strict";
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry("Japan", 125.8, "Tokyo");
const country2 = describeCountry("England", 55.98, "London");
const country3 = describeCountry("New Zealand", 5, "Wellington");

console.log(`${country1}\n${country2}\n${country3}`);
*/
// FIM

// * LECTURE: Function Declarations vs. Expressions
/*
"use strict";

//? Function Declaration
function percentageOfWorld1(population) {
    return ((population / 7900) * 100).toFixed(2);
}

console.log("Function Declaration");
const population1 = percentageOfWorld1(1441);
const population2 = percentageOfWorld1(125.8);
const population3 = percentageOfWorld1(5);

console.log(`${population1}\n${population2}\n${population3}`);

//? Function Expression
const percentageOfWorld2 = function (population) {
    return ((population / 7900) * 100).toFixed(2);
};

console.log("Function Expression");
const population4 = percentageOfWorld2(1441);
const population5 = percentageOfWorld2(125.8);
const population6 = percentageOfWorld2(5);

console.log(`${population4}\n${population5}\n${population6}`);
*/
// FIM

// * LECTURE: Arrow Functions
/*
"use strict";
const percentageOfWorld3 = (population) =>
    ((population / 7900) * 100).toFixed(2);

const population7 = percentageOfWorld3(1441);
const population8 = percentageOfWorld3(125.8);
const population9 = percentageOfWorld3(5);

console.log(`${population7}\n${population8}\n${population9}`);
*/
// FIM

// * LECTURE: Functions Calling Other Functions
/*
"use strict";

function percentageOfWorld1(population) {
    return ((population / 7900) * 100).toFixed(2);
}

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage} of the world.`;
}

const country1 = describePopulation("Japan", 125.8);
const country2 = describePopulation("England", 55.98);
const country3 = describePopulation("China", 1441);

console.log(`${country1}\n${country2}\n${country3}`);
*/
// FIM

// * LECTURE: Introduction to Arrays
/*
"use strict";

function percentageOfWorld1(population) {
    return ((population / 7900.0) * 100).toFixed(2);
}

const populations = [329.5, 125.8, 25.69, 212.6];

console.log(Boolean(populations.length === 4));

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
];

console.log(percentages);
*/
// FIM

// * LECTURE: Basic Array Operations (Methods)
/*
"use strict";
// 1:
const neighbours = [
    "Uruguay",
    "Argentina",
    "Paraguay",
    "Bolivia",
    "Peru",
    "Colombia",
    "Venezuela",
    "Guyana",
    "Suriname",
];

console.log(neighbours);
// 2:
neighbours.push("Utopia");

console.log(neighbours);

// 3:
neighbours.pop();

console.log(neighbours);

// 4:
if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country 😁");
}

// 5:
neighbours[neighbours.indexOf("Paraguay")] = "Republic of Paraguay";

console.log(neighbours);
*/
// FIM

// * LECTURE: Introduction to Objects
/*
"use script";

myCountry = {
    country: "Brazil",
    capital: "Brasília",
    language: "Portuguese",
    population: 212.6,
    neighbours: [
        "Uruguay",
        "Argentina",
        "Paraguay",
        "Bolivia",
        "Peru",
        "Colombia",
        "Venezuela",
        "Guyana",
        "Suriname",
    ],
};
*/
// FIM

// * LECTURE: Dot vs. Bracket Notation,
/*
"use strict";

const myCountry = {
    country: "Brazil",
    capital: "Brasília",
    language: "Portuguese",
    population: 212.6,
    neighbours: [
        "Uruguay",
        "Argentina",
        "Paraguay",
        "Bolivia",
        "Peru",
        "Colombia",
        "Venezuela",
        "Guyana",
        "Suriname",
    ],
};

// Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.
console.log(
    `${myCountry.country} has ${myCountry.population} millian ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry["population"]);

*/
// FIM

// * LECTURE: Object Methods
/*
"use strict";

const myCountry = {
    country: "Brazil",
    capital: "Brasília",
    language: "Portuguese",
    population: 212.6,
    neighbours: [
        "Uruguay",
        "Argentina",
        "Paraguay",
        "Bolivia",
        "Peru",
        "Colombia",
        "Venezuela",
        "Guyana",
        "Suriname",
    ],

    describe: function () {
        return `${this.country} has ${this.population} millian ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length == 0 ? true : false;
    },
};

const show_object = myCountry.describe();
console.log(show_object);
myCountry.checkIsland();
console.log(myCountry);

*/
// FIM

// * LECTURE: Iteration: The for Loop
/*
"use strict";

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}

*/
// FIM

// * LECTURE: Looping Arrays, Breaking and Continuing
/*
"use strict";

const populations = [329.5, 125.8, 25.69, 212.6];
const percentages2 = [];

function percentageOfWorld1(population) {
    return ((population / 7900.0) * 100).toFixed(2);
}

for (let i = 0; i < populations.length; i++) {
    percentages2.push(parseFloat(percentageOfWorld1(populations[i])));
}

console.log(percentages2);
*/
// FIM

//

// * LECTURE: Looping Backwards and Loops in Loops
/*
"use strict";

const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}
*/
// FIM

// * LECTURE: The while Loop
/*
"use strict";

const populations = [329.5, 125.8, 25.69, 212.6];
const percentages2 = [];
const percentages3 = [];

function percentageOfWorld1(population) {
    return ((population / 7900.0) * 100).toFixed(2);
}

for (let i = 0; i < populations.length; i++) {
    percentages2.push(parseFloat(percentageOfWorld1(populations[i])));
}

let loop = 0;
while (loop < populations.length) {
    percentages3.push(Number(percentageOfWorld1(populations[loop])));
    loop++;
}

console.log(percentages2);
console.log(percentages3);
*/
// FIM
