let maxTime = 1000;

const evenDoubler = (v, callback) => {
    let waitTime = Math.floor(Math.random()* (maxTime+1));
    if(v%2) {
        setTimeout(() => {
            callback(new Error('Odd Input'));
        }, waitTime)
    }else {
        setTimeout(() => {
            callback(null, v*2, waitTime)
        }, waitTime)
    }
};

module.exports.evenDoubler = evenDoubler;

module.exports.foo = 'bar';