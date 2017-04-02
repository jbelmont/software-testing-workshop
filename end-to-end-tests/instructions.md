## End-to-End Tests

To view lecture notes for this course, please consult the [github-pages](https://code-craftsmanship-saturdays.github.io/software-testing).

#### Definition of End-to-End Tests via InfoQ [End-To-End-Testing](https://www.infoq.com/articles/balancing-unit-and-end-to-end-tests)
End-to-End Tests simulate user behavior. In a web application, they will start the server, fire up a browser, click around, and assert that certain things happening in the browser give us confidence our feature is working. These tests give great confidence, but they are slow, brittle, and tightly coupled to the user interface.

* End-to-end testing is used to test whether the flow of an application from start to finish is behaving as expected.
* The purpose of performing end-to-end testing is to identify system dependencies
    * Ensure that the data integrity is maintained between various system components and systems.

## Why write end to end tests?

* Modern software systems are complex and are interconnected with multiple sub-systems
* A sub-system may be different from the current system or may be owned by another organization.
    * If any one of the sub-system fails, the whole software system could collapse.
    * This is major risk and can be avoided by End-to-End testing. End-to-End testing verifies the complete system flow.
* It increase test coverage of various sub-systems.
* It helps detect issues with sub-systems and increases confidence in the overall software product.

## Nightwatch.js

We will be using the nightwatch.js end to end testing library


