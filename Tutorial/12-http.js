const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Welcome to home page</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Welcome to about page</h1>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(`
            <h1>Oops!!</h1>
            <p>Can't find your page</p>
            <a href='/'>Back to Home page</a>
        `);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
