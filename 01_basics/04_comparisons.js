// console.log(2>1);   // true
// console.log(2<1);   // false
// console.log(2<=1);  // false
// console.log(2!=1);  // true


// console.log("2" >1);  // true
// console.log("02" >1);  // true

console.log(null > 0);  // false  
console.log(null == 0); // false
console.log(null >= 0); // true

// The reason is that an equality chack(==)  and comparisons (>< >= <=) works differently. Comaprisons convert null to a number,treating it as 0. That's why line 12-  null>=0 is true and line 10- null>0 is false

console.log(undefined > 0);  // false  
console.log(undefined == 0); // false
console.log(undefined < 0); // false

console.log("2" == 2);     // true
console.log("2" === 2);    // false - strict check (checks the datatype as well)

