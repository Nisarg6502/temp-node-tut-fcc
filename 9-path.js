const path = require('path')

//to check separator used by the OS
console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)
console.log(path.dirname(filePath))
console.log(path.delimiter)


const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)