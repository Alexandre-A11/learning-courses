// # Desafio 1:
const sum = (x: number, y: number) => {
    return x + y;
};

console.log(sum(1, 2));

// # Desafio 2:
const num: number = 3;

const nowString = num.toString();

console.log(
    2,
    typeof num,
    "\n" + nowString,
    typeof nowString,
    `\nNow ${nowString} is a string`
);

// # Desafio 3:
type reviewOptions = number | boolean;

const review = function (stars?: reviewOptions) {
    if (stars) {
        if (stars === 1) {
            console.log("Poor");
        } else if (stars === 2) {
            console.log("Average");
        } else if (stars === 3) {
            console.log("Good");
        } else if (stars === 4) {
            console.log("Very good");
        } else if (stars === 5) {
            console.log("Excellent");
        }
    } else {
        console.log("No rating given");
    }
};

review(false);
review(4);
review();
