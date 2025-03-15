//  this is the syntax to hit the backend server and get back a response if we are using fetch


// function main(){
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(async response => {
//         const json = await response.json()
//         console.log(json);
        
//     })
// }

// main();

async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const json = await response.json();
    console.log(json);
    
}
main()

// both the function does the same thing but, the second one is prefered becaues of the clean syntax


// if want to send a post request the syntax will be:-

async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1",{
        method: "POST"
    })
    const json = await response.json();
    console.log(json);
    
}
main()