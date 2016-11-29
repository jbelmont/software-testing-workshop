## Mocks

To view lecture notes for this course, please consult the [github-pages](https://code-craftsmanship-saturdays.github.io/software-testing).

#### Definition of Mocks via Wikipedia [Mocks](https://en.wikipedia.org/wiki/Mock_object)
In object-oriented programming, mock objects (also can be a unit of work) are simulated objects that mimic the behavior of real objects in controlled ways. A programmer typically creates a mock object to test the behavior of some other object, in much the same way that a car designer uses a crash test dummy to simulate the dynamic behavior of a human in vehicle impacts.

#### Reasons to use Mock Objects
In a unit test, mock objects can simulate the behavior of complex, real objects and are therefore useful when a real object is impractical or impossible to incorporate into a unit test. If an actual object has any of the following characteristics, it may be useful to use a mock object in its place:
the object supplies non-deterministic results (e.g. the current time or the current temperature);

**The Object has states that are difficult to create or reproduce (e.g. a network error);**
**The Object is slow (e.g. a complete database, which would have to be initialized before the test);**
**The Object does not yet exist or may change behavior;**
**The Object would have to include information and methods exclusively for testing purposes (and not for its actual task).**

#### Sinon.js Mock via explanation [Sinon Mocks](http://sinonjs.org/docs/#mocks)
Mocks (and mock expectations) are fake methods (like spies) with pre-programmed behavior (like stubs) as well as pre-programmed expectations. A mock will fail your test if it is not used as expected.