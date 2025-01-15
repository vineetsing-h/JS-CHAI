// let score = "33abc"
// console.log(typeof score);   // string
// console.log(typeof(score));  // string
// let valueinNumber = Number(score)
// console.log(typeof valueinNumber); // number
// console.log(valueinNumber);       // Nan


// let score = null
// console.log(typeof score);   // object
// console.log(typeof(score));  // object
// let valueinNumber = Number(score)
// console.log(typeof valueinNumber);  // number
// console.log(valueinNumber);         // 0

let score = undefined
console.log(typeof score);   // undefined
console.log(typeof(score));  // undefined
let valueinNumber = Number(score)
console.log(typeof valueinNumber);  // number
console.log(valueinNumber);   // NaN


// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  // true

// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  // false

let isLoggedIn = "Vineet"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);  // true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);          // 33
console.log(typeof(stringNumber));  // string

// ************** Operations *******************
let str1 = "hello"
let str2 = "Vineet"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);  // 12
console.log(1 + "2");  // 12
console.log("1" +2+3); // 123
console.log(1+2+"3");  // 33
console.log(+true);    //  1 
console.log(+"");      // 0

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);  // 101








