const express = require('express')
const path = require('path')
const app = express()

//setup static and middleware
app.use(express.static('./public')) 

// app.get('/',(req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })
//adding index.html to static assets 
//it acts as a root path for the server and can easily access all resources from the public folder

app.get('*',(req,res)=>{
    res.status(404).send('Resource not Found')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})