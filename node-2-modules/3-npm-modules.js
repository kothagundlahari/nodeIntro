var request = require('request');

request('http://www.pluralsight.com/', (err, res, body) => {
   if(!err && res.statusCode === 200) {
    console.log(body);
   }
});