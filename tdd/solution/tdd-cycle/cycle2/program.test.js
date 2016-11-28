const test = require('tape');

test('Practice the concept of test-driven development', nest => {

    nest.test('Does the average function exist', assert => {
       const tdd = require('./program');
       assert.ok(tdd.average, "Average Function Does Exist");
       assert.end();  
    });

});