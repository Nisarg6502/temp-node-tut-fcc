//started operating system process
console.log('first')
setTimeout(()=>{ //setTimeout is asynchronous and gets offloaded 
    console.log('second')
},0)
console.log('third')
console.log('fourth')
//completed and exited  operating system process