
const express = require("express");
const logger = require('./logger')
const app = express();

app.use(logger)
// app.use('/api',logger)
//providing a path will ensure that 'use' is applied to all routes subsequent to that path only
//It is executed when the base of the request path matches

app.get("/", (req, res) => {
    res.send("Home");
});
app.get("/about", (req, res) => {
    res.send("About");
});
app.get("/api/products", (req, res) => {
    res.send("Products");
});
app.get("/api/items", (req, res) => {
    res.send("Items");
});

app.listen(5000, (req, res) => {
    console.log("Server is now listening on port 5000...");
});

/*
If there are multiple routes, it becomes tedious to manually add the middleware as an arugument.
Hence, we use app.use()
*/