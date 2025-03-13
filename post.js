const express = require("express")

const app = express();

//In express, if you want ot send JSON data.
// you need to first parse the json data.

app.use(express.json())
// this code we have to put at the top of our codebase, if want to send json data.


// we can also use body-parser, but for that we have to require it on the top. 

// const bodyparser = requrie("body-parser"), this library is used by express under the hood.



app.post("/sum",function(req,res){
    console.log(req.body);
    
    const a = req.body.a;
    const b = req.body.b;

    res.json({
        ans: a + b,
    })
})

app.listen(3000)