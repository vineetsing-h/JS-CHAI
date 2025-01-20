const score = 400
console.log(score);    // 400

const balance = new Number(100)
console.log(balance);   // [Number: 100]

console.log(balance.toString().length);  // 3
console.log(balance.toFixed(2));  


const otherNumber = 23.6878
console.log(otherNumber.toPrecision(3));  // 23.7

const hundreds = 1000000
console.log(hundreds.toLocaleString());          // 1,000,000
console.log(hundreds.toLocaleString('en-IN'));   // 10,00,000

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);


// ++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);  // Object {}
console.log(Math.abs(-4));     // 4
console.log(Math.round(4.6));  // 5
console.log(Math.ceil(4.6));   // 5
console.log(Math.floor(4.8));   // 4
console.log(Math.random());
console.log(Math.random()*10);

const min = 10
const max = 20 
console.log(Math.floor(Math.random()*(max-min+1))+ min);












