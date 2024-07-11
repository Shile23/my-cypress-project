const functions = require('../../../support/functionsFlare/functions');
const assertions = require('../../../support/assertionsFlare/assertions');

describe('Login Locked Out User', () => {

    it('Testing Locked Out User', () => {

      cy.visit('https://www.saucedemo.com/');

      
      functions.typeUsername('locked_out_user');
      functions.typePassword('secret_sauce');
      functions.clickSubmit();
      assertions.verifyErrorMessageExist();
      assertions.verifyErrorText('Epic sadface: Sorry, this user has been locked out.');
      assertions.verifyErrorColor();
        });
    
  });