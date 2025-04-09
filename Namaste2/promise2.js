const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!")   
    }, 20000);   
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!")   
    }, 40000);   
});


// Always returns a promise
/* async function getData() {
    return p;
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));  */

async function handlePromise() {
    console.log("Hello");
    
    
    const val = await p1; // Await can only be used inside an async function
    console.log("Namaste JS"); 
    console.log(val);

    const val2 = await p2; // Await can only be used inside an async function
    console.log("Namaste Javascript 2"); 
    console.log(val2);
    
}

handlePromise()

// function getData(){
//     p.then((res) => console.log(res))
//     console.log("Namaste JS");
    
// }

// getData() 