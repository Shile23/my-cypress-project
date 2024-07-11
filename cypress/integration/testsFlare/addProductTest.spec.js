const functions = require('../../support/functionsFlare/functions');
const assertions = require('../../support/assertionsFlare/assertions');

describe('Add Product Test', () => {
    
    
    
    it('Add multiple items', () => {
    
      cy.visit('https://www.saucedemo.com/')
       
      functions.typeUsername('standard_user');
      functions.typePassword('secret_sauce');
      functions.clickSubmit();
      assertions.verifyUrlContains('https://www.saucedemo.com/inventory.html');

      // badge count asserts 

      functions.addToCartBackpack();
      assertions.verifyCartBadgeCount(1);
      functions.addToCartBike();
      assertions.verifyCartBadgeCount(2);
      functions.shoppingCart();
      functions.cartRemoveBike();
      assertions.verifyCartBadgeCount(1);
      functions.cartContinueShopping();

      // kart inventory count je jednak badge count-u

      functions.addToCartBike();
      functions.addToCartShirt();
      assertions.verifyCartBadgeCount(3);
      functions.shoppingCart();
      assertions.verifyCartInventoryItemsCount(3);




    });
});