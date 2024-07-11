const functions = require('../../support/functionsFlare/functions');
const assertions = require('../../support/assertionsFlare/assertions');

describe('Buy Product - Successful Purchase', () => {
    
    
    
    it('Buy single item', () => {
    
      cy.visit('https://www.saucedemo.com/')
       
      functions.typeUsername('standard_user');
      functions.typePassword('secret_sauce');
      functions.clickSubmit();
      assertions.verifyUrlContains('https://www.saucedemo.com/inventory.html');

      functions.addToCartBackpack();
      assertions.verifyCartBadgeCount(1);
      functions.shoppingCart();
      functions.checkoutSubmit();
      functions.cartFirstName('Marko');
      functions.cartLastName('Simkovic');
      functions.cartZip(11000);
      functions.cartContinue();
      functions.cartFinish();
      assertions.verifyCartSuccess();
      functions.cartBackHome();

    });
});