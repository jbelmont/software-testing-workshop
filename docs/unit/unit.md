## Unit Tests

To view lecture notes for this course, please consult the
[github-pages](https://jbelmont.github.io/software-testing).

[Rediscovery of TDD](https://www.quora.com/Why-does-Kent-Beck-refer-to-the-rediscovery-of-test-driven-development)

Instructions for Unit Exercises:
1. Go to unit folder `cd unit`
2. Open program.test.js and go to each TODO block.
3. Complete each todo block by adding unit tests.
4. Please run the following script to `npm run unit:test` in order to do the unit test exercises

### 1. Unit Test the Map Function:
```js
nest.test('Unit test the map function', assert => {
    assert.equal(actual, expected,
        `should render default message`);
    assert.end();
});
```

####For a typical unit test I usually create 2 variables one named actual and another named expect
*For `assert.equal(actual, expected, 'My message here')` if actual and expected are equal then the unit test will pass.*

The map function behaves in the following manner
```js
[1,2,3,4,5].map(function(number) {
    return {
        value: number
    };
});
```

This will return the following structure
```json
[
    { value: 1 },
    { value: 2 },
    ...
]
```

Add variables actual and expected to this first unit test.
The equal method expects to get single property/value in order to pass 1 === 1 or "Mike" === "Mike"
The deepEqual method does a deep property check like this [1,2,3] === [1,2,3]

### 2. Unit Test the Filter Function.

The filter function behaves in the following manner
```js
[1,2,3,4,5].filter(function(number) {
    return number > 3;
});
```

This will return the following structure
`[4, 5]`

*Either choose `assert.equal` or `assert.deepEqual` but remember deepEqual does a deep check with arrays but equal checks properties.*

### 3. Unit Test the concatAll Function.

The concatAll function behaves in the following manner
```js
[
    [1,2,3,4,5],
    [6,7,8,9,10]
].concatAll();
```

This will return the following structure
`[1,2,3,4,5,6,7,8,9,10]`

##### Write a Unit Test using the same format as previous 2 exercises.
```js
nest.test('I am some text', assert => {
    const actual = ...;
    const expected = ...;
    assert.equal(
        actual,
        expected,
        'I should another text'
    );
    assert.end();
});
```

### 4. Unit Test the concatMap Function.

The concatMap function behaves in the following manner
```js
const numStrings = [ ["One", "Two", "Three"], ["Four", "Five", "Six"] ];
[1, 2, 3, 4, 5].concatMap(function(num) {
    return numStrings[num];
});
```

This will return the following structure
`["One", "Two", "Three", "Four", "Five", "Six"]`
