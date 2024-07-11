const functions = require('../../../support/functionsFlare/functions');
const assertions = require('../../../support/assertionsFlare/assertions');

describe('Login Problem User', () => {

    it('Testing Problem User', () => {

      cy.visit('https://www.saucedemo.com/');

      
      functions.typeUsername('problem_user');
      functions.typePassword('secret_sauce');
      functions.clickSubmit();
      assertions.verifyUrlContains('https://www.saucedemo.com/inventory.html')
        });
    
  });