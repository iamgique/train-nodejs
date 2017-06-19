const fs = require('fs');
fs.readFile('hello.txt', function(err, data) {
  console.log(data.toString());
});
console.log('Do other things');
