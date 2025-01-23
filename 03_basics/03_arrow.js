 const user = {
    username: "vineet",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
 }

 user.welcomeMessage()
 user.username ="deepak"
 user.welcomeMessage()

 console.log(this);   // node environment so this =>> empty
 
 function chai(){
   let username = "vineet"
    console.log(this.username);    // undefined, was working in object but not in the function
    
 }

chai()

const chai1 = function(){
   let username = "vineet"
    console.log(this.username);    // undefined
}
chai1()


const chai2 = () => {
   let username = "vineet"
    console.log(this.username);    // undefined
}
chai2()

// const addTwo = (num1, num2) => {
//    return num1 + num2
// }
// console.log(addTwo(3, 4))


// const addTwo = (num1, num2) =>  num1 + num2    // Implicit return
// const addTwo = (num1, num2) =>  (num1 + num2)    // Implicit return
const addTwo = (num1, num2) => ({username: "vineet"})   // for returning the object we hve to wrap in ()
console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8]

myArray.forEach( () => {})