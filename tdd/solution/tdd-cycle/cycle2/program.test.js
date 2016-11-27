const test = require('tape');

test('Practice the concept of test-driven development', nest => {

    nest.test('Unit test the average function', assert => {
       const tdd = require('./program');
       assert.doesNotThrow(tdd.average, {message: 'fn is a function'}, "Average Function Does Exist");
       assert.end();  
    });

});