 // singleton
//  Object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Vineet",
    age: 26,
    location: "rewa",
    [mySym]: "mykey1",      // mySym: "mykey1",
    email: "vineetsingh4040@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(typeof JsUser.mySym);   // string

console.log(JsUser[mySym]);  // typeos symbol

JsUser.email = "vineetsin12@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "vineetsin@microsoft.com"  // but it has been freeze
console.log(JsUser);  // so we will still get email as vineetsin12@gmail.com

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());  // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, Vineet
