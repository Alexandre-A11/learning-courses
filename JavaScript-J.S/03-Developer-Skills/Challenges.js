// * Coding Challenge #1
const printForecast = function (arr) {
    let str = " ... ";
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}ºC in ${i + 1} days ... `;
    }
    console.log(str);
};

const thermometer = [17, 21, 23];
// const thermometer = [12, 5, -5, 0, 4];

printForecast(thermometer);
