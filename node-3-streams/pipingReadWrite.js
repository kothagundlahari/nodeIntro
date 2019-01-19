var request = require('request');
var fs = require('fs');

s = request('https://duckduckgo.com/');

s.pipe(fs.createWriteStream('duckduckgo.html'));