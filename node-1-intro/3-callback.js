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

const handleResults = (err, results, time) => {
    if(err) {
        console.log('Error' +err.message);
    }else {
        console.log(`The results are ${results} (${time} ms)`)
    }
};

evenDoubler(2, handleResults);
evenDoubler(1, handleResults);
evenDoubler(4, handleResults);
evenDoubler(3, handleResults);
evenDoubler(10, handleResults);


console.log('===========');