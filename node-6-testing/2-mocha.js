var should = require('should');
// var mocha = require('mocha');
// var describe = mocha.describe;

var fun = require('../node-2-modules/mathfun');



describe('Math fun', function () {

    describe('When used synchronously', function () {

        it('should double even numbers correctly', function () {
            fun.evenDoublerSync(2).should.equal(4);
        });


        it('should throw odd numbers', function (done) {
            (function () {
                fun.evenDoublerSync(3)
            }).should.throw(/Odd/);
            done();
        });
    })
    
});

describe('When used asynchronously ', function () {
    it('should double even numbers ', function (done) {
        fun.evenDoubler(2, function (error, results) {
            should.not.exist(error);
            results.should.equal(4);
            done();
        })
    });

    it('should return error on odd numbers ', function (done) {

        fun.evenDoubler(3, function (error, results) {
            should.exist(error);
            should.not.exists(results);
            done();
        })

    });
});
