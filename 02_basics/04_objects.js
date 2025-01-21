/* const tinderUser = new Object() */  // singleton object
const tinderUser = {}                  // non singleton object
tinderUser.id = "123abc"
tinderUser.name = "Vineet"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vineet",
            lastname: "Singh"
        }
    }
}
console.log(regularUser.fullname);  // { userfullname: { firstname: 'Vineet', lastname: 'Singh' } }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }          { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2)   // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "v@gmail.com"  
    },
    {
        id: 2,
        email: "s@gmail.com"  
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ] - array
console.log(Object.values(tinderUser));   // [ '123abc', 'Vineet', false ] - array
console.log(Object.entries(tinderUser));   // [ [ 'id', '123abc' ], [ 'name', 'Vineet' ], [ 'isLoggedIn', false ] ] - array of array


console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // true
