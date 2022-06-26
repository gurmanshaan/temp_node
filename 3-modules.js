// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum) 

// const shaan = "shaan";
// const gurman = "gurman";

// const sayHi = (name)=>{
//     console.log(`Hi there ${name}`)
// }

const {shaan,gurman} = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
require('./7-mind-grenade');
// console.log(data);

// sayHi("king");
// sayHi(shaan);
// sayHi(gurman);
