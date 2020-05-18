const test = require('tape');

test('Practice the concept of test-driven development', nest => {

    nest.test('Does the average function exist', assert => {
       const tdd = require('./program');
       assert.ok(tdd.average, "Average Function Does Exist");
       assert.end();  
    });

    nest.test('Test the average function', assert => {
        const {average} = require('./program');
        const expected = 5.5;
        assert.equal(average([1,2,3,4,5,6,7,8,9,10]), expected);
        assert.end();
    });

    nest.test('Test refactored average function', assert => {
        const {avg} = require('./program');
        const expected = 5.5;
        assert.equal(avg([1,2,3,4,5,6,7,8,9,10]), expected);
        assert.end();
    });

});