const functions = require('../../../support/functionsFlare/functions');
const assertions = require('../../../support/assertionsFlare/assertions');

describe('Login Error User', () => {

    it('Testing Error User - wrong username', () => {

      cy.visit('https://www.saucedemo.com/');

      functions.typeUsername('error_bata');
      functions.typePassword('secret_sauce');
      functions.clickSubmit();
      assertions.verifyErrorMessageExist();
      assertions.verifyErrorText('Epic sadface: Username and password do not match any user in this service');
      assertions.verifyErrorColor();
        });

    it('Testing Error User - wrong password', () => {

      cy.visit('https://www.saucedemo.com/');
    
      functions.typeUsername('error_bata');
      functions.typePassword('secret_plazma');
      functions.clickSubmit();
      assertions.verifyErrorMessageExist();
      assertions.verifyErrorText('Epic sadface: Username and password do not match any user in this service');
      assertions.verifyErrorColor();
            });


      

    
  });