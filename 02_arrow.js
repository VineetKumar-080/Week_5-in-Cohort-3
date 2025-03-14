// Syntax of basic arrow-function

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(2,3));
// if we are using cruly braces then we have to write return statement



// example of implicit return arrow-function- in this we don't have to write return statement.
const add = (num1, num2) => num1 + num2
// const add = (num1, num2) => (num1 + num2)
console.log(addTwo(2,3));

// how to return object in arrow function
const addNo = (num1, num2) => {{username: "Vineet"}}
console.log(addNo(3,5));
