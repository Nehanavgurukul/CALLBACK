var fs = require("fs");
var data = fs.readFileSync('callback1.txt');

console.log(data.toString());
console.log("Program Ended");