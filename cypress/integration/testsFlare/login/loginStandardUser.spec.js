const functions = require('../../../support/functionsFlare/functions');
const assertions = require('../../../support/assertionsFlare/assertions');


describe('Login Standard User', () => {
    
    
    
    it('Testing Standard User', () => {
    
        cy.visit('https://www.saucedemo.com/')
       
            
      functions.typeUsername('standard_user');
      functions.typePassword('secret_sauce');
      functions.clickSubmit();
      assertions.verifyUrlContains('https://www.saucedemo.com/inventory.html')
        });
        
    });


