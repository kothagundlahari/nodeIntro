
process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', function (data1) {
    process.stdout.write('Data -> '+data1)
});

process.stdin.on('end', function () {
    process.stderr.write('End\n');
});


process.on('SIGTERM', function () {
   process.stderr.write('Why are you terminating me?!? :) ')
});

console.log('Node is running as process# ' +process.pid);