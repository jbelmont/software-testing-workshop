'use strict';

module.exports = {
  'Code Craftsmanship Saturdays': browser => {
    const codeSaturdays = browser.page.codeCraftsmanshipSaturdaysPage();

    codeSaturdays
      .navigate()
      .waitForElementVisible('@codeCraftsmanshipContainerLabel', 1000)
      .assert.containsText('@codeCraftsmanshipContainerStrongLabel', 'Code Craftsmanship Saturdays')

    codeSaturdays
      .click('@trashBin')
      .assert.elementNotPresent('[data-email="tcox0@dion.ne.jp"]')

    codeSaturdays
      .click('@addSomeUserBtn')

    codeSaturdays.setInput('#emailInput', 'chuck@badass.net')
    codeSaturdays.setInput('#firstNameInput', 'Chuck')
    codeSaturdays.setInput('#lastNameInput', 'Norris')

    codeSaturdays
      .click('@addUserSubmit')
      .waitForElementVisible('[data-email="chuck@badass.net"]', 1000)

    codeSaturdays
      .click('[data-email="dpayne3@cdbaby.com"]')
      .assert.urlContains('user')
      .end();
  }
};
