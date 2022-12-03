const {readFileSync, writeFileSync} =require('fs');
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8') //utf8 is the encoding method so that node knows how to decode it
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first,second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, \n ${second}`, 
    {flag: 'a'}
)

console.log('done with this task')
console.log('starting another task')

//in sync, node performs task line by line and one after the other. 
//waiting time is high