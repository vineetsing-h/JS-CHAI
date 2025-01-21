// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

// array methods----

// myArr.push(6)
// myArr.push(8)
// myArr.pop()
myArr.unshift(9)     // [9, 0, 1, 2, 3, 4, 5]
myArr.shift()        // [0, 1, 2, 3, 4, 5]
console.log(myArr);

console.log(myArr.includes(9));  // false
console.log(myArr.indexOf(9));   // -1

const newArr = myArr.join()

console.log(myArr);       // return array
console.log(newArr);      // return string


// slice, splice
console.log("A ",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ",myArr);





