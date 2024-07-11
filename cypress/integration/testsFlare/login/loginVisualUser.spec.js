const functions = require('../../../support/functionsFlare/functions');
const assertions = require('../../../support/assertionsFlare/assertions');

describe('Login Visual User', () => {

    it('Testing Visual User', () => {

      cy.visit('https://www.saucedemo.com/');

      
      functions.typeUsername('visual_user');
      functions.typePassword('secret_sauce');
      functions.clickSubmit();
      assertions.verifyUrlContains('https://www.saucedemo.com/inventory.html')
        });
    
  });