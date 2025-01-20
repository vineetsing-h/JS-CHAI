// Dates
let myDate = new Date()   // Object 
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());  // 1/23/2023, 5:03:00 AM

let mynewDate = new Date("2023-01-14")
let mynewDate1 = new Date("01-14-2023")
console.log(mynewDate.toLocaleString());  // 1/14/2023, 12:00:00 AM 
console.log(mynewDate1.toLocaleString());  // 1/14/2023, 12:00:00 AM 

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday:"long",
    
})
