const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
