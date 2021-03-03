const http = require('http');

const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  var url = req.url;
  if (url === '/api3') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hellow from node backend');
  }else if (url === '/api3/bac3') {
    res.setHeader('Content-Type', 'application/json');
    res.end('{"data":"node bac, num is 3"}');
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.end('unknown, maybe index?');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});