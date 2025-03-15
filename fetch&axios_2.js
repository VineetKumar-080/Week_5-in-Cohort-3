const axios = require("axios")
async function main() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    // response.data
    console.log(response.data);
    
}
main() 

// axios syntax is very much cleaner as compared to fetch. 


// if want to send a post request the syntax will be:-

async function main() {
    const response = await axios.post("https://jsonplaceholder.typicode.com/todos/1")
    // response.data
    console.log(response.data);
    
}
main() 