const express = require("express")

const app = express();

let requestCount = 0;

// first handler(Middleware), In this we have to specify req,res,next, Because this is middleware and it should contain req,res and next for the next middleware(function)

function requestIncreaser(req,res,next){
    requestCount = requestCount +  1;
    console.log(`Total number of request = ${requestCount}`);
    next();
}



// In the last handler we mostly use req,res, but in first handler (middleware) we should (write req,res,next)

function realSumHandler(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
}

// app.use(requestIncreaser)
// we write app.use, when we want to apply the middleware on all the routes below that specified line.

app.get("/sum",requestIncreaser,realSumHandler)

app.get("/multiply",requestIncreaser,realSumHandler)

app.get("/admin", function(req,res){
    res.json({
        message: `Total number of request on the server are ${requestCount}`
    })
})

app.listen(3000);