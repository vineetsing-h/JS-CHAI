const coding = ["js", "ruby","java", "python", "cpp"]

coding.forEach(  function (item) {
   // console.log(item);
    
})

coding.forEach(  (item) => {
    console.log(item);
    
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    } 
]

myCoding.forEach( (item) => {
    console.log(`Language Name: ${item.languageName}, File Name: ${item.languageFileName}`);
})