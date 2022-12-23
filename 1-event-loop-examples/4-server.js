const http =  require('http')

const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000, ()=>{ //listen ia asynchronous and event loop just keeps running waiting for those requests
    console.log('Server listening on port: 5000......')
})