const test = require('tape');

test('Practice the concept of test-driven development', nest => {

    nest.test('Unit test the average function', assert => {
       const tdd = require('./program');
       assert.ok(tdd.average, "Average Function Doesn't Exist");
       assert.end();  
    });

});