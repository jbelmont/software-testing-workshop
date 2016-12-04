# Code Craftsmanship Saturdays Fourth Session

To view lecture notes for this course, please consult the [github-pages](https://code-craftsmanship-saturdays.github.io/software-testing).

This meetup event gives an introduction to unit testing, integration testing,
and end-to-end-testing. We will also go over Mocks, Stubs, and Spies.

# Setup instructions
### 1. Install node.js via [Node.js](https://nodejs.org/en/download/)
### 2. Install couchdb via [CouchDB](http://couchdb.apache.org/)
### 3. Run `npm install` on root level of folder.
### 4. Run `npm run` to see all the scripts available

# Assignments

Each assignment folder has several exercise files. 
Read the instructions.md file in order to complete the exercises.
Some assignments may or may not have a program.js file that you will test.
Each assignment will have a file called program.test.js.
program.test.js will be where most of the logic exists for each test.

## Unit Testing

A unit test is an automated piece of code that invokes a unit of work in the system and then checks a single assumption about the behavior of that unit of work.
A unit of work is a single logical functional use case in the system that can be invoked by some public interface (in most cases).
A unit of work can span a single method, a whole class or multiple classes working together to achieve one single logical purpose that can be verified.

`Go to  unit-test folder`
open `program.test.js`
Read `instructions.md` in the folder unit-test
Run the command `npm run unit:test` at root of folder in order to see if tests pass.
Run the command `npm run unit:test:solution` at root of folder to see the solution output if you want.

## Integration Testing

Integration Testing is a level of software testing where individual units are combined and tested as a group.
Integration tests ensure that various units work together correctly. 
Introducing dependencies on external modules or data also turns unit tests into integration tests.

`Go to integration-tests folder`
Read `instructions.md` in the folder integration-tests
Run the command `npm run integration:test` at root of folder in order to see if tests pass.
Run the command `npm run integration:test:solution` to see the solution output.

## Behavior Driven Development

BDD uses a more verbose style so that it can be read almost like a sentence and some argue that BDD eliminates issues that TDD might cause. 
The ability to read your tests like a sentence is a cognitive shift in how you will think about your tests. 
The argument is that if you can read your tests fluidly, you will naturally write better and more comprehensive tests.
[Josh Davis Blog Entry](http://joshldavis.com/2013/05/27/difference-between-tdd-and-bdd/)

Read `instructions.md` in the folder bdd
Run the command `npm run bdd:test` at root of folder in order to see if tests pass.
Run the command `npm run bdd:test:solution` to see the solution output.

## Test Driven Development

Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only. This is opposed to software development that allows software to be added that is not proven to meet requirements. [Wikipedia](https://en.wikipedia.org/wiki/Test-driven_development)

Read `instructions.md` in the folder tdd
The npm run commands will depend on the tdd cycle you are in but the first thing to do is go to `tdd/tdd-cycle/cycle1`
All the commands can be found in instructions.md


## Mocks // Spies // Stubs

###
* Mocks (and mock expectations) are fake methods (like spies) with pre-programmed behavior (like stubs) as well as pre-programmed expectations. 
* A mock will fail your test if it is not used as expected. 
* Mocks should only be used for the method under test. 
* In every unit test, there should be one unit under test. 
* If you want to control how your unit is being used and like stating expectations upfront (as opposed to asserting after the fact), use a mock.
* [Mocks](http://sinonjs.org/docs/#mocks)

###
* Test stubs are functions (spies) with pre-programmed behavior. 
* They support the full test spy API in addition to methods which can be used to alter the stub’s behavior.
* As spies, stubs can be either anonymous, or wrap existing functions. 
* When wrapping an existing function with a stub, the original function is not called.
* [Stubs](http://sinonjs.org/docs/#stubs)

###
* A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls. 
* A test spy can be an anonymous function or it can wrap an existing function.
* Test spies are useful to test both callbacks and how certain functions/methods are used throughout the system under test. 
* The following simplified example shows how to use spies to test how a function handles a callback
* [Spies](http://sinonjs.org/docs/#spies)

Read `instructions.md` in the folder mock-stubs-spies
Run the commands `npm run mock:sinon` to write tests in mocha and chai
Run the commands `npm run mock:sinon:tape` to write tests in tape.js and should.js if you like

## Functional Tests (End-to-End Tests)

....