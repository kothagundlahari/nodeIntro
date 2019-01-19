var request = require('request');

r = request('https://www.pluralsight.com/');

r.on('data', function (data) {
    console.log('Data');
    console.log('=======================================');
    console.log(data);
    console.log('=======================================');
});

r.on('end',function () {
    console.log('Data received');
});