## Test Fixtures

[Test Fixtures](https://en.wikipedia.org/wiki/Test_fixture)

* * A test fixture is a fixed state of a set of objects used as a baseline for running tests.
* A test fixture is something used to consistently test some item, device, or piece of software.
* Test fixtures can be found when testing electronics, software and physical devices.
* A software test fixture sets up the system for the testing process by providing the initialization code.
    * In turn satisfying whatever preconditions there may be.
    An example could be loading up a database with known parameters from a customer site before running your test.
* Ruby on Rails web framework uses YAML to initialize a database before running a test.
    * This allows for tests to be repeatable, which is one of the key features of an effective test framework

Advantages of Test Fixtures:

* Test Fixtures allow for tests to be repeatable since you start with the same setup every time.
* Test Fixtures eases test code design by allowing the developer to separate methods into different functions and reuse each function for other tests.
* Preconfigures tests into a known state at start instead of working from a previous test run.

* The purpose of a test fixture is to ensure that there is a well known and fixed environment in which tests are run so that results are repeatable.

Examples of Test Fixtures:

1. Preparation of input data and setup/creation of fake or mock objects
2. Loading a database with a specific, known set of data
3. Copying a specific known set of files creating a test fixture will create a set of objects initialized to certain states.

Open up `test-fixtures` directory and add an integration using supertest to retrieve the seeded document
