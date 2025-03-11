// Assignment Question 1: 
// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it



const express = require("express");
const app = express();

let requestCount = 0;

// Middleware
function TotalRequestCounter(req, res, next) {
    requestCount++;
    console.log(`Total number of requests sent to the server: ${requestCount}`);
    next();
}

//First Route
app.get("/sum", TotalRequestCounter, function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid query parameters" });
    }

    res.json({ answer: a + b });
});

//Second Route

app.get("/subtract", TotalRequestCounter, function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid query parameters" });
    }

    res.json({ answer: a - b });
});

// Main route for count total number of request
app.get("/admin", function(req, res) {
    res.json({ message: `Total number of requests sent to the server is = ${requestCount}` });
});


// server port.
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
