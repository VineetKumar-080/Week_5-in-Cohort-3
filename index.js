const express = require("express")

const app = express();

/*

parseFloat convert a string into a floating-point number

we can also use parseInt, it will help to convert a string into an integer (a whole number)

*/
app.get("/sum", function(req,res){
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    //below is the another method by which we can pass the arguments without using "?" query. instead we can use params syntax which support
    // =>  /:/:b
/*
    app.get("/sum/:a/:b", function(req,res){
        const a = parseFloat(req.params.a);
        const b = parseFloat(req.params.b);

        we can also use parseInt (for whole number)
    */

    if(isNaN(a)|| isNaN(b)){
        return res.status(400).json({
            error: "Both 'a' and 'b' are required"
        })
    }

    res.json({
        ans: a + b
    })
})
app.get("/multiply", function(req,res){
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if(isNaN(a)|| isNaN(b)){
        return res.status(400).json({
            error: "Both 'a' and 'b' are required"
        })
    }

    res.json({
        ans: a * b
    })
})
app.get("/divide", function(req,res){
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if(isNaN(a)|| isNaN(b)){
        return res.status(400).json({
            error: "Both 'a' and 'b' are required"
        })
    }
    res.json({
        ans: a/b
    })
})
app.get("/subtract", function(req,res){
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if(isNaN(a)|| isNaN(b)){
        return res.status(400).json({
            error: "Both 'a' and 'b' are required"
        })
    }

    res.json({
        ans: a - b
    })
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
    
})