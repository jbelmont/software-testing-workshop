const test = require('tape');

// Load Array.prototype.customMap function
require('./exercises/map/map');
// Load Array.prototype.customFilter function
require('./exercises/filter/filter');
// Load Array.prototype.concatAll function.
require('./exercises/concatAll/concatAll');
// Load Array.prototype.concatMap function.
require('./exercises/concatMap/concatMap');

test('Practice the concept of unit testing with simple tape library', function(nest) {

    // TODO: Make unit test pass with actual and expected assertion.
    nest.test('Unit test the map function', assert => {
        const numbers = [1, 2, 3, 4, 5];
        const actual = numbers.customMap(function(elem) {
          return elem + 1;
        });
        const expected = [2, 3, 4, 5, 6];
        assert.deepEqual(actual, expected,
            `should render default message`);
        assert.end();
    });

    // TODO: Unit test filter function
    nest.test('Unit test the filter function', assert => {
      assert.end();
    });

    // TODO: Unit test concatAll function

    // TODO: Unit test concatMap function
});
