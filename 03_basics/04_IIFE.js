// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
})();   // <- semicolon is important

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('vineet')
