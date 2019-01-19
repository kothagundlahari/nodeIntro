var Resource = require('./2-resource');

var r = new Resource(7);

r.on('start', function () {
   console.log('I have started');
});

r.on('data', function (d) {
    console.log('    I received ->' +d);
});

r.on('end', function (t) {
    console.log('I have done with' +t +'data events');
});