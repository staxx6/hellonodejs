var http = require('http');
var url = require('url');
var fs = require('fs');

var dt = require('./myfirstmodule')

fs.readFile('input.txt', function (err, data) {
  if(err) return console.error(err);
  console.log(data.toString());
})

console.log("Program ended");

const a = 5;

if(true) {
  console.log("Inside if: " + a);
  let a = 6;
  console.log("New let var: " + a);
  a = 1;
  console.log("a is now: " + a);
}

console.log("Outside if: " + a);

/*
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('Hello World\n');
}).listen(8080);
console.log('Server running');
*/
