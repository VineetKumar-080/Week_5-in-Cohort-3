//Cors = Cross origin resource sharing  

const express = require("express")
const cors = require("cors")

const app = express();


app.use(express.json());
// here we install that dependency(cors) and then use it as middleware.
app.use(cors())

// we use(10th) if we want to allow requests from any frontend domain.


// app.use(cors({
//     domains: ["http://google.com", "http://emoloyee.google.com"]
// }))

// we use the above sytanx(13-15) if we want to restrict to certain domain




app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const sum = a + b;
    res.json({ sum }); // Sending response back
});



app.listen(3000)