var http = require('http');
var url = require('url');
var fs = require('fs');

var dt = require('./myfirstmodule')

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('Hello World\n');
}).listen(8080);

console.log('Server running');
