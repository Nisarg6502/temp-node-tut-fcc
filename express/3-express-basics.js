const express = require('express')
const app = express() //invoking a function similar to createServer

app.get('/',(req,res)=>{  //callback function invoked each time get is used
    res.status(200).send('<h1>Home Page</h1>')
    console.log('User hit the resource')
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page') //express takes care of status codes but we can have control ver it too.
})

app.all('*',(req,res)=>{ //all manages all HTTP verbs like GET, POST, etc.
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000..')
})

//methods
/*
app.get
app.post
app.put
app.delete
app.all
app.use
app.listen
*/