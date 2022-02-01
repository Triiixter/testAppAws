let http = require('http');

http.createServer(function (req, res) {
  res.write("Welcome To Ashwin's Server Baby!!!");
  res.end();
}).listen(5000);