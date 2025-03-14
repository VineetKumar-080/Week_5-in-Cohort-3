const user = {
    username : "Vineet",
    price : 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
    
}

// user.welcomeMessage();
// user.username = "pablo"
// user.welcomeMessage()

// console.log(this); 
// (output = {})
// when we are in node environemnt, this(keyword) refers to an empty object because there is no context in global. 


// function one(){
//     let username = "Vineet"
//     console.log(this.username);

// in function we can't use this(keyword) to refer something as we use it in object.

// }

// one();




// const chai = function(){
//     let username = "Vineet"
//     console.log(this.username);
// }
// same here, this doesn't know how to refer something in function.
// chai()


//Arrow function
const chai = () => {
    let username = "Vineet"
    console.log(this);
}

chai()


/*
Conclusion: 

1. Yes, we can use this in both functions and objects.
2. In functions, this can refer to different things depending on how the function is called — but it CAN refer to variables if those variables are part of an object or a context that’s passed in.
3. However, if you meant local variables defined inside the function itself, then you’re right — this CANNOT directly access those variabl, Because this refers to the execution context (like an object), not the local scope of the function.
*/



