'use strict'

const test = require('tape')
const Puppy = require('../src/index')
let puppy = new Puppy({
  'name': 'Cuddles',
  'color': 'brindle'
})

/*
  A note about assertions:
  In the tests below, the assert.deepEqual() function takes 2 arguments:
    "actual" and "expected".
  The value of actual should be the return value of the unit you are testing,
  and the expected value should be what you would expect the returned value to be.
*/

test('Cute little puppy', function (t) {
  t.test('should be an instance of Puppy', function (assert) {
    // fix assertion so that it confirms puppy is a instance of Puppy class
    assert.deepEqual(false/* fix me */, true)
    assert.end()
  })

  t.test('#speak() should return a puppy bark', function (assert) {
    // fix assertion so that it confirms your puppy barks correctly
    // Here , the actual value is returned by the speak() function call
    // update the "expected" value of the assertion to match what is expected .speak()'s return value
    assert.deepEqual(puppy.speak(), false)
    assert.end()
  })

  t.test('#callByName() get attention of puppy when using correct name', function (assert) {
    // write 1 assertion each for calling puppy by correct and incorrect name
    // You may reassign the actual/expected variables, or remove them entirely if you wish,
    // opting to directly insert your arguments.
    let actual = true
    let expected = false
    assert.deepEqual(actual, expected)
    assert.deepEqual(actual, expected)
    assert.end()
  })
})
