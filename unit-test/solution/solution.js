const test = require('tape');

// Load Array.prototype.customMap function
require('../exercises/map/map');

test('Practice the concept of unit testing with simple tape library', nest => {

    nest.test('Unit test the map function', assert => {
        const actual = [1,2,3,4,5];
        const expected = actual.customMap(numbers => numbers);
        assert.deepEqual(actual, expected, `Should return newer copy of array`);
        assert.end();
    });
});