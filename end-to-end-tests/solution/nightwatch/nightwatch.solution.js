'use strict';

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

    browser
      .click('[data-email="dpayne3@cdbaby.com"]')
      .assert.urlContains('user')
      .end();

    function setInput(input, value) {
      browser.setValue(input, value);
    }
  }
};
