const functions = require('../../../support/functionsFlare/functions');
const assertions = require('../../../support/assertionsFlare/assertions');

describe('Homepage Product Test', () => {
    
    
    
    it('Homepage validations with random images', () => {
    
      cy.visit('https://www.saucedemo.com/')
       
      functions.typeUsername('standard_user');
      functions.typePassword('secret_sauce');
      functions.clickSubmit();
      assertions.verifyUrlContains('https://www.saucedemo.com/inventory.html');

    });
});