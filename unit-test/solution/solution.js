const test = require('tape');

// Load Array.prototype.customMap function
require('../exercises/map/map');
// Load Array.prototype.customFilter function
require('../exercises/filter/filter');
// Load Array.prototype.concatAll function.
require('../exercises/concatAll/concatAll');

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

    nest.test('Unit test the Array.prototype.concatAll function', assert => {
        const actual = [ [1,2,3,4,5], [6,7,8,9,10] ];
        const expected = [1,2,3,4,5,6,7,8,9,10];
        assert.deepEqual(
            actual.concatAll(), 
            expected, 
            'Should flatten and return [1,2,3,4,5,6,7,8,9,10]'
        );
        assert.end();
    });

});