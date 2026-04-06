const { createServer } = require('node:http');

const hostname = '192.168.1.170';
const port = 3000;

const server = createServer({ headersTimeout: 10000 });

server.on('request', (req, res) => {
    console.log(
        `
        request: ${JSON.stringify(req.headers)}
        `
    )

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
