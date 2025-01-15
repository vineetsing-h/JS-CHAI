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

