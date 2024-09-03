// How to create node.js web applications ?

// step-1 import require module
// use "require" directive to load http module and store returned HTTP instance into http variable.

// step-2  create server 
// you have to use created http instance and call http.createServer() method to create server instance 
// And then bind it at port 8081 using listen method associated with server instance.
// Pass it a function with request and response parameters and 
// write the sample implementation to return "Hello World"


var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end("Hello browser !")
}).listen(8081)

console.log('Server is running at port http://127.0.0.1:8081/');