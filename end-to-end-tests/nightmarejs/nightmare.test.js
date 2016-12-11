const winston = require('winston');
const Nightmare = require('./config')["nightmare"];
const nightmare = Nightmare({ show: true });

nightmare
  .goto('https://localhost:3000')
  .click('.add-user-btn-container > button', 'Add User')
  .type('#emailInput', 'johnrambo@badass.com')
  .type('#firstNameInput', 'John')
  .type('#lastNameInput', 'Rambo')
  .click('#genderSelect')
  .evaluate(function () {
    return document.querySelector('#main .searchCenterMiddle li a').href
  })
  .end()
  .then(function (result) {
    winston.info(result);
  })
  .catch(function (error) {
    winston.err('Search failed:', error);
  });