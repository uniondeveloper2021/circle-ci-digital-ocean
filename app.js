const http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World again12!'); 
  res.end(); 
}).listen(4000, '0.0.0.0'); 