// * Coding Challenge #1
/*
"use strict";
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins / 2 >= avgKoalas) {
        console.log(`Dolphins wins 🐬(${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins 🐨(${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(
            `No team wins. ☹\nDolphins: ${avgDolphins}\nKoalas: ${avgKoalas}`
        );
    }
}

const dolphins = calcAverage(85, 54, 41);
const koalas = calcAverage(23, 34, 27);

checkWinner(dolphins, koalas);
// checkWinner(15, 30);
*/
// FIM

// * Coding Challenge #2
/*
"use strict";

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const tip = calcTip(100);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`${bills}\n${tips}\n${total}`);
*/
// FIM

// * Coding Challenge #3
/*
"use strict";

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2).toFixed(2);
        return this.bmi;
    },
};
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2).toFixed(2);
        return this.bmi;
    },
};

mark.calcBMI();
john.calcBMI();
console.log(
    `${
        mark.bmi > john.bmi
            ? `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})!`
            : `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})!`
    }`
);
*/
// FIM

// * Coding Challenge #4
/*
"use strict";

// Functions
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;
    console.log(average);
};

// Start
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

calcAverage(totals);
calcAverage(tips);
*/
// FIM
