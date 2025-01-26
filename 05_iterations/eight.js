const myNums = [1, 2, 3]

const sum = myNums.reduce(function (accumulator, currentValue) {
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`)
    return accumulator + currentValue
}, 0)

console.log(sum); // 6