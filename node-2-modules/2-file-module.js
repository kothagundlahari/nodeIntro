const mathfun = require('./mathfun');

const processResults = (err, results, time) => {
    if(err) {
        console.log('Error' +err.message);
    }else {
        console.log(`The results are ${results} (${time} ms)`)
    }
};

mathfun.evenDoubler(2, processResults);
mathfun.evenDoubler(3, processResults);