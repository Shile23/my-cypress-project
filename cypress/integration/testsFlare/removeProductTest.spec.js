const functions = require('../../support/functionsFlare/functions');
const assertions = require('../../support/assertionsFlare/assertions');

describe('Remove Product Test', () => {
    
    it('Remove single item', () => {
    
      cy.visit('https://www.saucedemo.com/')
       
      functions.typeUsername('standard_user');
      functions.typePassword('secret_sauce');
      functions.clickSubmit();
      assertions.verifyUrlContains('https://www.saucedemo.com/inventory.html');

        // remove sa homepagea
      
      functions.addToCartBackpack();
      assertions.verifyCartBadgeCount(1);
      functions.addToCartBike();
      assertions.verifyCartBadgeCount(2);
        
      functions.cartRemoveBackpack();
      functions.cartRemoveBike();
      assertions.verifyCartBadgeCountNotExist();

       // remove iz carta

      functions.addToCartBackpack();
      assertions.verifyCartBadgeCount(1);
      functions.addToCartBike();
      assertions.verifyCartBadgeCount(2);
      functions.shoppingCart();
      assertions.verifyCartInventoryItemsCount(2);

      functions.cartRemoveBackpack();
      assertions.verifyCartInventoryItemsCount(1);

      functions.cartRemoveBike();
      assertions.verifyCartInventoryItemsCountNotExist();

    });
});