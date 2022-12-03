const {readFileSync, writeFileSync, readFile, writeFile} =require('fs');

console.log('start')
readFile('./content/first.txt', 'utf8', (err,result)=>{ //a buffer is obtained if encoding isn't provided
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
        console.log(err)
        return;
    }
    console.log(result)
    const second = result;
    writeFile('./content/result-async.txt',
        `here is the result: ${first}, ${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log('done with this task')
        }
    )
    })
})

console.log('starting next task')

//in async when we start a task, node offloads to another task simultaneously
