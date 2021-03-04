const http = require('http');
const axios = require('axios');

const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    let url = req.url;
    if (url === '/api3') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('hellow from node backend');
    } else if (url === '/api3/bac3') {
        res.setHeader('Content-Type', 'application/json');
        res.end('{"data":"node bac, num is 3"}');
    } else if (url === '/api3/get_bac2') {
        axios.get('http://api2/api2/items/1024')
            .then(response => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(response.data));
            })
            .catch(error => {
                console.log(error);
                res.end('error')
            });
    } else if (url === '/api3/get_bac1') {
        axios.get('http://api1/api1/bac1')
            .then(response => {
                console.log(response.data);
                // console.log(response.data.url);
                // console.log(response.data.explanation);

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(response.data));
            })
            .catch(error => {
                console.log(error);

                res.end('error')
            });
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.end('unknown, maybe index?');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});