const test = require('tape');

test('Practice the concept of test-driven development', nest => {

    nest.test('Does the average function exist', assert => {
       const tdd = require('./program');
       assert.doesNotThrow(tdd.average, {message: 'fn is a function'}, "Average Function Does Exist");
       assert.end();  
    });

});