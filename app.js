const http = require('http');

http.createServer(function (req, res) {
  res.status(200).json({ status: true, resp: 'ok', message: 'Hello World' });
}).listen(3009, '0.0.0.0'); 