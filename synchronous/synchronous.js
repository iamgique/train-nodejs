const fs = require('fs');
const data = fs.readFileSync('hello.txt');

console.log(data.toString());
console.log('Do other things');
