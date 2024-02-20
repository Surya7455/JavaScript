const score = 420;
console.log(score);

const balance = new Number(440)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 23.42023
console.log(otherNum.toPrecision(3));

console.log(otherNum.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// ######### Maths ############

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(98.98));
console.log(Math.ceil(4,2));
console.log(Math.floor(4,9));
console.log(Math.min(9,4,5,5,7,4,3));
console.log(Math.max(23,64,75,35));

console.log(Math.random()); // Give the value between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10 + 1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min +1)) + min);

