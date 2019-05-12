var eventEmitter = require('events').EventEmitter;

var getResource = (c) => {
    var e = new eventEmitter();
    process.nextTick(() => {
        var count = 0;
        e.emit('start');
        var t = setInterval(() => {
            e.emit('data', ++count);
            if (count === c) {
                e.emit('end', count);
                clearInterval(t)
                console.log('some thing');
                console.log('some thing3');
                console.log('some thing4');
            }
        }, 10);
    });
return e
};

var r = getResource(5);

r.on('start', () => {
    console.log('I have started');
});


r.on('data', (d) => {
    console.log('   I received:' +d);
});
r.on('end', () => {
    console.log('I have ended');
});