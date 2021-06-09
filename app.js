var http = require('http');


const array = [];
while (true) {
  // This makes the array bigger on each iteration
  array.push(new Array(10000000));

  const memory = process.memoryUsage();
  console.log((memory.heapUsed / 1024 / 1024 / 1024).toFixed(4), 'GB');
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);
