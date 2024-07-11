const functions = require('../../../support/functionsFlare/functions');
const assertions = require('../../../support/assertionsFlare/assertions');

describe('Login Visual User', () => {

    it('Testing Visual User', () => {

      cy.visit('https://www.saucedemo.com/');

      
      assertions.verifyUsernameVisuals();
      assertions.verifyPasswordVisuals();
      assertions.verifyLoginButtonVisuals();
        });
    
  });