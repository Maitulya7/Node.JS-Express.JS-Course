const {readFileSync ,writeFileSync } = require('fs')
console.log("Starting the task")
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first ,second);

//flag a will append the value , if we don't use that node will overwrite it . 
writeFileSync('./content/result-sync.txt', `hello this is the results: ${first} , ${second}`,{flag:'a'});
console.log("Completed the task")