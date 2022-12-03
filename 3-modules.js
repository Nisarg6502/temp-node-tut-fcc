//Modules
// CommonJS - every file is module by default
//Modules - Encapsulated Code (only share minimum)

const names = require('./4-firstmodules')
const sayHi = require('./5-secondmodules')
const data = require('./6-alternative')
require('./7-mind-grenade')
console.log(data)

sayHi('Nisarg')
sayHi(names.john)
sayHi(names.peter)