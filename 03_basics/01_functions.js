function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("T"); 
}

// sayMyName()

/* function addTwoNumbers(number1, number2)
{
   console.log(number1 + number2);
     
}  */
// addTwoNumbers(3, 4)   // 7
// addTwoNumbers(3, "4")    // 34
// console.log("Result: ", result);  // undefined
function addTwoNumbers(number1, number2)
{
   // let result = number1 + number2
   // return result
     return number1 + number2
}  
const result = addTwoNumbers(3,5)
console.log("Result: ", result);  // Result: 8

function loginUserMessage(username){
    if(!username)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Vineet"))     // Vineet just logged in                                   
console.log(loginUserMessage(""))           //  just logged in
// console.log(loginUserMessage())             //  undefined just logged in

function calculateCartPrice1(...num1)
{
    return num1
}

console.log(calculateCartPrice1(200, 400, 500, 2000)) // [200, 400, 500, 2000]

function calculateCartPrice2(val1, val2, ...num1)
{
    return num1
}

console.log(calculateCartPrice2(200, 400, 500, 2000))  // [500, 2000]

const user = {
    username: "vineet",
    price: 199
}

function handleObject(anyobject)
{
 console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
 
}

// handleObject(user)      // both type of function calling
handleObject({                                        
    username: "deepak",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnScondValue(getArray){
    return getArray[1]
}

console.log(returnScondValue(myNewArray));    // 400
console.log(returnScondValue([200,40,50,70]));
