/*
Middleware have access to req, res and next
Advantages of using middleware:

    Middleware can process request objects multiple times before the server works for that request.
    Middleware can be used to add logging and authentication functionality.
    Middleware improves client-side rendering performance.
    Middleware is used for setting some specific HTTP headers.
    Middleware helps for Optimization and better performance.

Middleware Chaining: Middleware can be chained from one to another, Hence creating a chain 
of functions that are executed in order. The last function sends the response back to the browser. 
So, before sending the response back to the browser the different middleware process the request.

The next() function in the express is responsible for calling the next middleware function if there is one.
*/

const express = require("express");
const app = express();

// req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    // res.send('Middleware')
    next() //we have to either terminate a middleware or pass it to the next middleware/action
}

app.get("/", logger, (req, res) => {
    /*
    const method = req.method;
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    */
    res.send("Home");
});
app.get("/about", logger, (req, res) => {
    /*
    const method = req.method;
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    */
    res.send("About");
});

app.listen(5000, (req, res) => {
    console.log("Server is now listening on port 5000...");
});

//To avoid code redundancy, middlewares are used akin to functions and their variables are 
//passed as arguments