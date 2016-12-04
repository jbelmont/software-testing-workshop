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
Mocks (and mock expectations) are fake methods (like spies) with pre-programmed behavior (like stubs) as well as pre-programmed expectations.
A mock will fail your test if it is not used as expected.

Sinon Documentation discusses when not to use Mocks.
Mocks come with built-in expectations that may fail your test. Thus, they enforce implementation details.
**The rule of thumb is: if you wouldn’t add an assertion for some specific call, don’t mock it. Use a stub instead.** 
**In general you should never have more than one mock (possibly with several expectations) in a single test.**

#### Sinon.js Stubs via explanation [Sinon Stubs](http://sinonjs.org/docs/#stubs)
Test stubs are functions (spies) with pre-programmed behavior. They support the full test spy API in addition to methods which can be used to alter the stub’s behavior.
This is a key point here as well with stubs you get the full spy api but with Mocks you don't.

#### Sinon.js Spies via explanation [Sinon Spies](http://sinonjs.org/docs/#spies)
A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls.
Test spies are useful to test both callbacks and how certain functions/methods are used throughout the system under test.

*Sinon has an assertion api that you can reference here [Sinon Assertions](http://sinonjs.org/docs/#assertions)*
*You can use either Mocha or Tape.js here it is your choice which one you feel most comfortable with.*

**Open program.test.js in `mocks-stubs-spies` folder**
1. Stub the `retrieveDocument` function
```javascript
function retrieveDocument({dbName, name}) {
    const couchDBName = nano.use(dbName);
    return new Promise((resolve, reject) => {
        couchDBName.get(name, (err, body) => {
            if (!err) {
                resolve(body);
            }
            reject(err);
        });
    });
}
```

You don't need the implementation here but I included it here for your reference.
Using Sinon check that the retrieveDocument stub is called once.
Make an assertion that the payload and the expected response match.

2. Stub the `updateDocument` function.

```javascript
function insertDocument({ dbName = 'softwaretesting', name = 'users', body } = {}) {
    return new Promise((resolve, reject) => {
        const couchDBName = nano.use(dbName);
        return updateDoc({ dbName: couchDBName, name, body })
            .then(() => {
                resolve(retrieveDoc({ dbName: couchDBName , name }));
            })
            .catch(err => {
                reject(err);
            });
    });
}

function updateDoc({dbName, name, body}) {
    return new Promise((resolve, reject) => {
        dbName.insert(body, name, (err, body, header) => {
            if (!err) {
                resolve(body);
            } else {
                reject(err);
            }
        });
    });
}
```

Again you don't need the implementation here but I added it in case you are curious.
