## Behavior-Driven Development (BDD)

To view lecture notes for this course, please consult the [github-pages](https://jbelmont.github.io/software-testing).

## Definition of BDD via Wikipedia
BDD (behavior-driven development) combines practices from TDD and from ATDD.[27] It includes the practice of writing tests first, but focuses on tests which describe behavior, rather than tests which test a unit of implementation. Tools such as Mspec and Specflow provide a syntax which allow non-programmers to define the behaviors which developers can then translate into automated tests. Behavior-driven development combines the general techniques and principles of TDD with ideas from domain-driven design and object-oriented analysis and design to provide software development and management teams with shared tools and a shared process to collaborate on software development.

## Another Look at what BDD is via Josh Davis [Blog](http://joshldavis.com/2013/05/27/difference-between-tdd-and-bdd/)
The main difference is just the wording. BDD uses a more verbose style so that it can be read almost like a sentence.

In contrast to TDD, BDD is when we write behavior & specification that then drives our software development.
The ability to read your tests like a sentence is a cognitive shift in how you will think about your tests. The argument is that if you can read your tests fluidly, you will naturally write better and more comprehensive tests.

Open program.test.js and go to each TODO block.

### 1. Unit Test the findIdx Function:
```javascript
it('Unit test the Array.prototype.findIdx function', done => {
        const numbers = [1,2,3,4,5];
        const expected = 2;
        expect(numbers.findIdx(val => val === 3)).to.eql(expected);

        const names = [
            {
                name: 'Marcel'
            },
            {
                name: 'Leo'
            },
            {
                name: 'Dave'
            }
        ];
        const IDX = 1;
        // TODO add assertions here:
        done();
    });
```

##### Read the chai assertion [Assertions](http://chaijs.com/api/assert)
##### Read the BDD Styles for Expect and Should [Styles](http://chaijs.com/guide/styles)


*For Unit tests I usually create 2 variables one named actual and another named expect but this is strictly up to you.*

_Expect example_
```javascript
expect(someTest).to.eql(ThisAssertion);
```

_Should example_
```javascript
foo.should.equal('bar');
```

The `Array.prototype.findIdx` function behaves in the following manner
```javascript
[{ name: 'Marcel' },{ name: 'Leo' },{ name: 'Dave' }].findIdx(function(value) {
    return value["name"] === "Leo";
});

// outputs => 1
```

### 2. Unit test the Array.prototype.findInput Function

Write a BDD Style test using the following structure in program.test.js
```javascript
it('Unit test the Array.prototype.findInput function', function(done) {
    // TODO: Finish the test here.
    done();
});
```

The `Array.prototype.findInput` function behaves in the following manner
```javascript
[{ name: 'Marcel' },{ name: 'Leo' },{ name: 'Dave' }].findInput(function(value) {
    return value["name"] === "Leo";
});

// outputs => { name: 'Leo' }
```

### 3. Unit test the Array.prototype.zip Function

Write a BDD Style Test in the TODO block in program.test.js

The `Array.prototype.zip` function behaves in the following manner
```javascript
[
    [1, 2, 3],
    ["one", "two", "three"],
    [true, false, true]
].zip();

// outputs =>
[
    [1, "one", true],
    [2, "two", false],
    [3, "three", true]
]
```
