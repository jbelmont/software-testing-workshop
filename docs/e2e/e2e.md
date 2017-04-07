## End-to-End Tests

To view lecture notes for this course, please consult the [github-pages](https://code-craftsmanship-saturdays.github.io/software-testing).

#### Definition of End-to-End Tests via InfoQ [End-To-End-Testing](https://www.infoq.com/articles/balancing-unit-and-end-to-end-tests)
End-to-End Tests simulate user behavior. In a web application, they will start the server, fire up a browser, click around, and assert that certain things happening in the browser give us confidence our feature is working. These tests give great confidence, but they are slow, brittle, and tightly coupled to the user interface.

#### Nightwatchjs End to End Testing Library

* Nightwatch.js is a Node.js based End-to-End (E2E) testing solution for browser based apps and websites.
* It uses the powerful W3C WebDriver API to perform commands and assertions on DOM elements.
* Write End-to-End tests in Node.js quickly and effortlessly that run against a Selenium/WebDriver server.

#### WebDriver

* WebDriver is a general purpose library for automating web browsers.
* It was started as part of the Selenium project, which is a very popular and comprehensive set of tools for browser automation, initially written for Java but now with support for most programming languages.

* Nightwatch uses the WebDriver API to perform the browser automation related tasks
    * I.E. opening windows and clicking links for instance.

* WebDriver is now a W3C specification, which aims to standardize browser automation.
* WebDriver is a remote control interface that enables introspection and control of user agents.
* It provides a platform and a restful HTTP api as a way for web browsers to be remotely controlled.

[WebDriver Spec](https://www.w3.org/TR/webdriver/)


* Nightwatch works by communicating over a restful HTTP api with a WebDriver server (Selenium server).
* The restful API protocol is defined by the W3C WebDriver API.

#### Nightwatch Operations

* Nightwatch needs to send at least 2 requests to the WebDriver server in order to perform a command or assertion
    * The first request to locate an element given a CSS selector (or Xpath expression)
    * The second request to perform the actual command/assertion on the given element.

```javascript
module.exports = {
  'Code Craftsmanship Saturdays': browser => {
    browser
      .url('http://localhost:3000')
        .waitForElementVisible('.code-craftsmanship-container-label', 1000)
        .assert.containsText('.code-craftsmanship-container-label > strong', 'Code Craftsmanship Saturdays')

    browser
      .click('.users-container .users-container-trash-bin')
      .assert.elementNotPresent('[data-email="tcox0@dion.ne.jp"]')

    browser
      .click('#addSomeUserBtn')

    setInput('#emailInput', 'chuck@badass.net')
    setInput('#firstNameInput', 'Chuck')
    setInput('#lastNameInput', 'Norris')

    browser
      .click('#addUserSubmit')
      .waitForElementVisible('[data-email="chuck@badass.net"]', 1000)
      .end();

    function setInput(input, value) {
      browser.setValue(input, value);
    }
  }
};
```

Above is a sample End To End Test for Nightwatch.js

The string `Code Craftsmanship Saturdays` will be what this particular test suite will be called.

Notice that it lives in an `module.exports` object

The `browser` object has the main elements you will need for your test namely `click`,  `url`, and `assertions`

Since I only put one key there is one step to this test, I could however split this test into two parts like so

```javascript
module.exports = {
  'Load Default Screen and click trash can': browser => {
    browser
      .url('http://localhost:3000')
        .waitForElementVisible('.code-craftsmanship-container-label', 1000)
        .assert.containsText('.code-craftsmanship-container-label > strong', 'Code Craftsmanship Saturdays')

    browser
      .click('.users-container .users-container-trash-bin')
      .assert.elementNotPresent('[data-email="tcox0@dion.ne.jp"]')
  },

  'Add a User': browser => {
      browser
        .click('#addSomeUserBtn')

        setInput('#emailInput', 'chuck@badass.net')
        setInput('#firstNameInput', 'Chuck')
        setInput('#lastNameInput', 'Norris')

        browser
        .click('#addUserSubmit')
        .waitForElementVisible('[data-email="chuck@badass.net"]', 1000)
        .end();

        function setInput(input, value) {
            browser.setValue(input, value);
        }
  }
};
```

Here the End to End test has been broken into 2 steps, I could break it up further if I wanted.

`Nightwatch.js` also has lifecycle methods that you can use

```javascript
module.exports = {
  before : function(browser) {
    console.log('Setting up...');
  },

  after : function(browser) {
    console.log('Closing down...');
  },

  beforeEach : function(browser) {

  },

  afterEach : function() {

  },

  'step one' : function (browser) {
    browser
     // ...
  },

  'step two' : function (browser) {
    browser
    // ...
      .end();
  }
};
```

The goal of End to End tests are to test the behavior of your application

One thing to keep in mind is that you should not be testing edge cases with your end to end tests.

Some metrics to think about:

1. You should have many unit tests that test all the possible edge cases for each function/class.
2. Your integration tests will consequently test multiple units of work and you should have a good number of them.
3. End to End tests should really follow the happy path of a user workflow.
    1. These types of tests are more resource intensive and you should think about separating end to end tests to an additional build.
    2. Keep your first build fast by only incorporating Unit Tests
    3. Perhaps include a secondary build where you run integration tests and end to end tests.

Instructions for End To End Exercises:
1. Go to end to end tests folder `cd end-to-end-tests/nightwatch`
2. Open codeCraftsmanshipSaturdays.js.
3. Complete each todo block by adding the last part of the end to end test.
4. Run the script `npm run end:to:end:test`

[NightWatch Docs](http://nightwatchjs.org/api)
