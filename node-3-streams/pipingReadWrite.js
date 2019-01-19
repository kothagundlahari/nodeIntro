var request = require('request');
var fs = require('fs');

var zlib = require('zlib');

s = request('https://duckduckgo.com/');

s.pipe(fs.createWriteStream('duckduckgo.html'));

s.pipe(zlib.createGzip()).pipe(fs.createWriteStream('duckduckgo.gz.html'));