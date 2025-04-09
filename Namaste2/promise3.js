
const API_URL = "https://api.github.com/users/vineetsingh"

async function handlePromise() {
    try {
        const data = await fetch(API_URL)
        const jsonValue = await data.json()
        console.log(jsonValue);
    }
    catch (err) {
        console.log(err);
        
    }
  
    
    // fetch() => Response.json() => jsonValue
}

handlePromise();