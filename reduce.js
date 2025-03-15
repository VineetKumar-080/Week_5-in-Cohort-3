// Reduce functioning. using simple function

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(accumulator, currenvalue){
//     console.log(`accumulator: ${accumulator} and currenvalue: ${currenvalue}`);
    
//     return accumulator + currenvalue
// },0)


const myTotal = myNums.reduce( (accumulator, currenvalue) => {
    return accumulator + currenvalue
},0)

// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay =shoppingCart.reduce( (accumulator,item) => {
   return accumulator + item.price
},0)

console.log(priceToPay);
