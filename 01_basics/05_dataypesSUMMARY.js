// # Primitive   (Call by value) - we get the copy of the value, not the original vale, we dont get the reference of the original value
                                // Changes apply on the copy not the original value

// String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // false - i.e unique
const bigNumber = 2385940528458696485965n

// Javascript is dynamic typed language i.e data type of variable can change throughout a program as you assign different values to it 




// Non Primitive (Reference type)
// Array, Objects, Functions

const heros = ["shakktiman", "naagraj","doga"]

let myObj = {
    name: "Vineet",
    age:   26,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber);





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive),   Heap (Non-Primitive)

let myYoutubename = "vineetsingh"

let anothername = myYoutubename
anothername = "winsin"

console.log(myYoutubename);   // vineetsingh
console.log(anothername);     // winsin


let userone = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let usertwo = userone
usertwo.email = "hitesh@gmail.com"

console.log(userone.email);   // hitesh@gmail.com
console.log(usertwo.email);   // hitesh@gmail.com

