const test = require('tape');

require('./program');

test('Practice the concept of test-driven development', nest => {

    nest.test('Unit test the Array.prototype.customMap function', assert => {
        const actual = [1,2,3,4,5];
        const expected = actual.customMap(numbers => numbers);
        assert.deepEqual(actual, expected, `Should return [1,2,3,4,5]`);
        assert.end();
    });

    

});