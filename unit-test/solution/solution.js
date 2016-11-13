const test = require('tape');

// Load Array.prototype.customMap function
require('../exercises/map/map');
require('../exercises/filter/filter');

test('Practice the concept of unit testing with simple tape library', nest => {

    nest.test('Unit test the Array.prototype.customMap function', assert => {
        const actual = [1,2,3,4,5];
        const expected = actual.customMap(numbers => numbers);
        assert.deepEqual(actual, expected, `Should return [1,2,3,4,5]`);
        assert.end();
    });

    nest.test('Unit test the Array.prototype.customFilter function', assert => {
        const actual = [1,2,3,4,5];
        const expected = actual.customFilter(num => num > 3);
        assert.deepEqual([4,5], expected, `Should return [4,5]`);
        assert.end();
    });

});