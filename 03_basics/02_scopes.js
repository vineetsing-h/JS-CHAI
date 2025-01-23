let a = 300

if(true){
    let a =10
    const b = 20
    // var c =30
    console.log("Inner: ", a);
    
}



console.log(a);
// console.log(b);
// console.log(c);
 
function one(){
    const username = "vineet"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
}

one()

if(true){
    const username = "vineet"
    if(username === "vineet")
    {
        const website = "youtube"
        console.log(username + website);
        
    }
    // console.log(website); 
}
// console.log(username);

//+++++++++++++++++++++++++++++=======++++++++++++++++

addone(5)                   // Works fine
function addone(num){
    return num + 1
}


addtwo(5)                      // Error
const addtwo = function(num){
    return num + 2
}
