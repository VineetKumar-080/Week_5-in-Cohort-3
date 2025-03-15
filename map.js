// Map in javascript


const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums  = myNums.map( (num) => {return num + 10})
// console.log(newNums);


// Chaining using map in js.
const newNums = myNums
                .map((num) => num * 10)
                // here in num we get the updated value. (not 1)
                .map((num) => num + 1)
                .filter( (num)=> num >= 40)

console.log(newNums);
