const http = require('http')
const {readFileSync} = require('fs')

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeSyles = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    // console.log(req.method)
    // console.log(req.url)

    const url = req.url
    //home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'}) //syntax: (statusCode,?Headers)
        //statusCode: 200 -> OK
        res.write(homePage)
        //res.end('<h1>Hi</h1>')
        res.end() //end means communication is over
    }
    //about page
    else if (url === '/about') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Us</h1>')
        res.end() 
    }
    //styles
    else if (url === '/styles.css') {
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeSyles)
        res.end() 
    }
    //logic
    else if (url === '/browser-app.js') {
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end() 
    }
    // image/logo
    else if (url === '/logo.svg') {
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeLogo)
        res.end() 
    }
    //404
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end() 
    }

})
//we are not providing any metadata about the body,
// /about, /, /content, etc all give the same result for the default server
//hence, we need to provide more data to the server through headers, etc.

server.listen(5000)
//ports: communication endpoint
/*
For http traffic, we have specific ports
There are specific ports for specfic things that we wanna do.
IPs are analogous to buildings and ports to flats. 
Each IP can utilise all sets of ports as they are unique globally.


Status Code--->
HTTP response status codes indicates whether a specific HTTP request
has been successfully completed.

MIME types--->
Multipurpose Internet Mail Extensions is a standard that indicates the nature 
and format of a document, file, or assortment of bytes. 
*/