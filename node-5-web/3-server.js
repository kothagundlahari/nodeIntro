var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    if(req.url  === '/file.txt'){
        fs.createReadStream(__dirname +'/file.txt').pipe(res);
    }else {
        res.end('Hello World!!');
    }
}).listen(3001, '127.0.0.1');

console.log('Server is running ');


