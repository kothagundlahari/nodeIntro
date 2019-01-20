var spawn = require('child_process').spawn,
    ps = spawn('ps', ['ax']),
    grep = spawn('grep', ['node']);

ps.stdout.pipe(grep.stdin);

grep.stdout.pipe(process.stdout);

ps.stderr.on('data', function (data) {
    console.log('=====data ps.stderr ======');
    console.log('ps stderr ' +data);
    console.log('==========================')
});

grep.stderr.on('data', function (data) {
    console.log('======data grep.stderr======');
    console.log('ps stderr ' +data);
    console.log('=============================')
});