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
        assert.equal(actual, expected,
            `should render default message`);
        assert.end();
    });

    // TODO: Unit test filter function
    nest.test('Unit test the filter function', assert => {

    });

    // TODO: Unit test concatAll function

    // TODO: Unit test concatMap function
});