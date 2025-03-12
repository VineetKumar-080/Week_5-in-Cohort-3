const express = require("express")

const app = express();

let requestCounter = 0;

// Middleware:-
function loggerMiddleware(req,res,next){
    requestCounter++;
    let timestamp = new Date().toLocaleString();
    console.log(`The method is =  ${req.method}`);
    console.log(`The URL is =  ${req.url}`);
    console.log(`The Timestamp is =  ${timestamp}`);
    console.log(`The total number of request are = ${requestCounter}`);
    
    next();
    
}

app.use(loggerMiddleware)

// FirstRequest:-
app.get("/sum", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid query parameters" });
    }

    res.json({
        output: a + b,
    })
})

// SecondRequest:-
app.get("/subtract", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid query parameters" });
    }

    res.json({
        output: a + b,
    })
})


//

app.get("/main",function(req,res){
    res.json({
        NumberOfRequest: `Total number of request till now are : ${requestCounter}`
 
    })
})


app.listen(3000, ()=>{
    console.log("server started");
    
});