//Promise: Best video on promise
/*
- Resolve
- Reject
- Pending

*/

function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            const error = true;
            if(!error){
                console.log('Function: Your promise has been resolved')
                resolve();
            }
            else{
                console.log('Function: Your promise hasn\'t been resolved')
                reject('Sorry, not resolved');
            }
        },2000)
    })
}

func1().then(function () {
    console.log('Harry: Thanks for resolving')    
}).catch((error)=>{
    console.log('Harry: very bad bro. '+error)
})