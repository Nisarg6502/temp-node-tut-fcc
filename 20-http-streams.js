var http = require('http')
var fs = require('fs')

http.createServer((req,res)=>{
    // const text= fs.readFileSync('./content/big.txt','utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt','utf8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)  //pushing from readStream to writeStream. If we can read data in chunks,
        // we can write too in chunks
        //Therefore, instead of sending huge files in one go, we send it in chunks using writeable stream.
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
}).listen(5000)