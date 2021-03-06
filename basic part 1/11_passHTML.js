/**
 * Passing HTML pages
 */

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(`URL of the page: ${req.url}`);
    /* 200 is status code, content-type can be : JSON,HTML,text, etc */

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    let readStreamData = fs.createReadStream(__dirname + '/assets/index.html');
    readStreamData.pipe(res);
});
server.listen(8080);
/* setting localhost:8080 as a port where request will be responded or in simple words server will be lsitening to the port 8080*/
console.log("started");
// Once started open localhost:8080 on you favourite browser
// To stop the server from listening the port , press 'ctrl c' in the command-prompt