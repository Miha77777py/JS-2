// 1
const celsium = 33;
const fahrenheit = Math.round(celsium * 1.8 + 32);
console.log(`${fahrenheit}° F`);

// 2
const daysInMonth = 31;
const hoursInMonth = daysInMonth * 24;
const minutesinMonth = hoursInMonth * 60;
console.log(`Days: ${daysInMonth}\nHours: ${hoursInMonth}\nMinutes: ${minutesinMonth}`);

// 3
let health = 10;
let energy = 100;
console.log(`Health before hit: ${health} HP\nEnergy before run: ${energy}%`);
health -= 3;
energy -= 60;
console.log(`Health after hit: ${health} HP\nEnergy after run: ${energy}%`);

// 4
let sum = 1250;
const discount = 10;
sum -= (sum / 100) * discount;
console.log(`Total sum with discount: ${sum}`);

// 5
let floatPoint = 5.5;
floatPoint = Math.floor(floatPoint);
console.log(floatPoint);

// 6
let floatString = "5.5";
floatString = parseFloat(floatString);
console.log(floatString);

// 7
let numString = "64";
numString = parseInt(numString);
console.log(numString);

// 8
let sqrtNumber = 64;
console.log(`Square root of ${sqrtNumber}: ${Math.sqrt(sqrtNumber)}`);

// 9
let stringToNum = "22";
let numToString = 22;
stringToNum = parseInt(stringToNum);
numToString = numToString.toString();
console.log(stringToNum);
console.log(numToString);
