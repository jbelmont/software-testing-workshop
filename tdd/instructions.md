## Test-Driven Development (BDD)

To view lecture notes for this course, please consult the [github-pages](https://jbelmont.github.io/software-testing).

#### Definition of TDD via Wikipedia [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)
Each test case fails initially: This ensures that the test really works and can catch an error. Once this is shown, the underlying functionality can be implemented. This has led to the "test-driven development mantra", which is "red/green/refactor", where red means fail and green means pass. Test-driven development constantly repeats the steps of adding test cases that fail, passing them, and refactoring. Receiving the expected test results at each stage reinforces the developer's mental model of the code, boosts confidence and increases productivity.

#### Test-Driven Development Cycle
**_1. Add a test_**
**_2. Run all tests and see if the new test fails_**
**_3. Write the code_**
**_4. Run tests_**
**_5. Refactor code._**
**_Repeat_**

#### Exercise Instructions
Requirements for First TDD Cycle
Create a function that computes the average of a range of numbers.
Please go to slide xyz in [github-pages](https://jbelmont.github.io/software-testing)

##### Test-Driven Development Cycle 1 (Add a Test / Run Tests)
1. Go to file path `tdd/tdd-cycle/cycle1/program.test.js` and add a failing test by calling a function that doesn't exist in program.js
2. Add a failing test in program.test.js using either Mocha with Chai or with Tape from our previous exercies.
3. Run the failing test `npm run tdd:cycle1`

##### Test-Driven Development Cycle 2 (Write the Code / Run Tests)
1. Go to file path `tdd/tdd-cycle/cycle2`.
2. Add the minimal requirement to make the test pass again.
3. (Hint) Add an empty function in `program.js` and then call it with the appropriate assertion.
4. Run the test with `npm run tdd:cycle2`

##### Test-Driven Development Cycle 3 (Refactor by adding implementation / Add a test / Run all Tests again)
1. Go to file path `tdd/tdd-cycle/cycle3`.
2. Implement the average function in program.js.
3. Add a unit test for the average function with an array of numbers.
4. Use appropriate assertion to unit test the function.
5. Run the test with `npm run tdd:cycle3`

##### Test-Driven Development Cycle Final / (Refactor code / Add a test / Run all tests again)
1. Go to the file path `tdd/tdd-cycle/cyclefinal`.
2. Refactor the code again with possible different implementation or quit.
3. If refactored with newer function than add new test else add run the same test for original implementation
4. Run the test with `npm run tdd:cycle:final`
