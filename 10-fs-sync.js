const { readFileSync,writeFileSync } = require('fs');
console.log('start') //sync vs async

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

// console.log(first,second);

writeFileSync('./content/result-sync.txt',`Here is the result : ${first} , ${second}`,{flag:'a'});

console.log('done with task');//sync vs async
console.log('starting with next');//sync vs async
