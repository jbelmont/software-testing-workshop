## Test-Driven Development (BDD)

To view lecture notes for this course, please consult the [github-pages](https://code-craftsmanship-saturdays.github.io/software-testing).

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


1. Add a failing test in program.test.js using either Mocha with Chai or with Tape from our previous exercies.

