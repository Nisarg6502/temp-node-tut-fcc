const express = require('express')
const path = require('path')
const app = express()

//setup static and middleware
app.use(express.static('./public')) //uses all resources required by page and eliminates the tedious work of explicitly 
//mentioning the content type of each resource, getting them, resolving them.

//static asses is an asset where the server doesn't have to change it

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

/*
The two functions deal with segments starting with / in very different ways; join will just concatenate it with the previous
argument, however resolve will treat this as the root directory, and ignore all previous paths - think of it as the result
of executing cd with each argument:

    path.join('/a', '/b') // Outputs '/a/b'

    path.resolve('/a', '/b') // Outputs '/b'

Another thing to note is that path.resolve will always result in an absolute URL, and will use your working directory as a 
base to resolve this path. But as __dirname is an absolute path anyway this doesn't matter in your case.
*/

app.get('*',(req,res)=>{
    res.status(404).send('Resource not Found')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})