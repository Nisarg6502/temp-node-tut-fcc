const http = require('http')

const server = http.createServer((req,res)=>{ //req -> incoming requests; res-> response sent
    if(req.url === '/'){
    res.end('Welcome to our home page')
        
    }
    if(req.url === '/about'){
        res.end('Here is our short istory')
    }
    res.end(`<h1>OOps!</h1>
        <p>We can't seem to find what you are looking for</p>
        <a href="/">Back Home</a>`)
})

server.listen(5100)