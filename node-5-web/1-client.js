var http = require('http');

var options = {
  host: 'www.duckduckgo.com',
  port: 80,
  path: '/',
  method: 'GET'
};

console.log('Making the request');

var req = http.request('http://duckduckgo.com/', function (res) {
    console.log(res.statusCode);
    res.pipe(process.stdout);

});

req.end();