const os = require('os')

//info aobut current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
const uptime = os.uptime()
console.log(`the system uptime is: ${uptime}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)