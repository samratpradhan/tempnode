// Modules - Encapsulated Code (only share minimum)
//CommonJS, every file is module (by default)



const names=require('./3-name')
const sayHi=require('./4-utils')
const data=require('./6-alternative')
require ('./5-mind-grenade')
console.log(data)
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)