const http = require('http');
const util = require('util');
const port = 8080;

const server = http.createServer((request, response) => {
  console.log("incoming request for " + util.inspect(request.url));
  response.end("Hello, World! This is Node.js");
});

server.on('error', err => {
  console.error("oops, something went wrong: " + err);
});


server.listen(port, () => {
  console.log("server up & running on port:" + port)
});
