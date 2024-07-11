const functions = require('../../support/functionsFlare/functions');
const assertions = require('../../support/assertionsFlare/assertions');

describe('Sum Products Test', () => {
    
    it('Sum multiple prices of items', () => {
    
      cy.visit('https://www.saucedemo.com/')
       
      functions.typeUsername('standard_user');
      functions.typePassword('secret_sauce');
      functions.clickSubmit();
      assertions.verifyUrlContains('https://www.saucedemo.com/inventory.html');

     // 3 itema dodajem i idem na checkout stranu

     functions.addToCartBackpack();
     functions.addToCartBike();
     functions.addToCartShirt();
     functions.shoppingCart();
     functions.checkoutSubmit();
     functions.cartFirstName('Marko');
     functions.cartLastName('Simkovic');
     functions.cartZip(11000);
     functions.cartContinue();

     // sabiram i asertujem ih preko funkcije

    functions.cartInventoryItemsPrice();

    // validiram da su ostale cene tacne 

    assertions.verifyCartSubtotal('55.97');
    assertions.verifyCartTax('4.48');
    assertions.verifyCartTotal('60.45');

    });
});
