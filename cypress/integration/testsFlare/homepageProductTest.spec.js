const functions = require('../../support/functionsFlare/functions');
const assertions = require('../../support/assertionsFlare/assertions');

describe('Homepage Product Test', () => {
    
    
    
    it('Homepage validations with random images', () => {
    
      cy.visit('https://www.saucedemo.com/')
       
      functions.typeUsername('standard_user');
      functions.typePassword('secret_sauce');
      functions.clickSubmit();
      assertions.verifyUrlContains('https://www.saucedemo.com/inventory.html');

      assertions.verifyCartInventoryItemsArePresent();
      assertions.verifyCartInventoryPicturesArePresent();
    });

    // da bih bio siguran proci cu jos jednom ali sa "problem" userom da potvrdimo asertaciju

    it('Homepage validations with random images 2', () => {
    
        cy.visit('https://www.saucedemo.com/')
         
        functions.typeUsername('problem_user');
        functions.typePassword('secret_sauce');
        functions.clickSubmit();
        assertions.verifyUrlContains('https://www.saucedemo.com/inventory.html');
  
        assertions.verifyCartInventoryItemsArePresent();
        assertions.verifyCartInventoryPicturesArePresent();
      });
});