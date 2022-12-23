setInterval(()=>{ //asynchronous
    console.log('hello, world')
},2000)
console.log('I will run first')
//process stays alive unless we kill the process with CTRL + C 
//or an unexpected error occurs