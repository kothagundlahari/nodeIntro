
process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', function (data1) {
   process.stdout.write('Data -> '+data1)
});

process.stdin.on('end', function () {
   process.stderr.write('End\n');
   console.log('this is a test statement');
});
