const locators = require('../locatorsFlare/locators');

class Functions {
    
  typeUsername(username) {
    cy.get(locators.usernameInput)
    .click()
    .type(username);
  }

  typePassword(password) {
    cy.get(locators.passwordInput)
    .click()
    .type(password);
  }

  clickSubmit() {
    cy.get(locators.loginButton).click();
  }

  addToCartBackpack() {
    cy.get(locators.addToCartItemBackpack).click(); 
  }

  addToCartBike() {
    cy.get(locators.addToCartItemBike).click();
  }

  addToCartShirt() {
    cy.get(locators.addToCartItemShirt).click();
  }

  shoppingCart() {
    cy.get(locators.shoppingCartLink).click();
  }

  checkoutSubmit() {
    cy.get(locators.checkout).click();
  }

  cartFirstName(name) {
    cy.get(locators.cartFirstName).click().type(name);
  }
  cartLastName(lastname) {
    cy.get(locators.cartLastName).click().type(lastname);
  }
  cartZip(number) {
    cy.get(locators.cartZip).click().type(number);
  }
  cartContinue() {
    cy.get(locators.cartContinue).click();
  }
  cartContinueShopping() {
    cy.get(locators.cartContinueShopping).click();
  }  
  cartFinish() {
    cy.get(locators.cartFinish).click();
  }
  cartBackHome() {
    cy.get(locators.cartBackHome).click();
  }
  cartRemoveBike() {
    cy.get(locators.cartRemoveBike).click();
  }
  cartRemoveBackpack() {
    cy.get(locators.cartRemoveBackpack).click();
  }

  test1() {
    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < 1; j++) {
          for (let k = 0; k < 1; k++) {
              for (let l = 1; l <= 10; l++) {
                  console.log(l);
              }
          }
      }
  }
  }

  cartInventoryItemsPrice() {

    cy.get(locators.inventoryItemPrice).then(elements => { // uzimam lokator i cene iz njega
      let prices = [];
        elements.each((index, element) => {  // iteracija
          let priceText = Cypress.$(element).text().trim(); 
          let price = parseFloat(priceText.replace('$', '')); // za svaki konvertujem u broj

            if (!isNaN(price)) { // utvrdjujem da je broj dobar
                prices.push(price);

                cy.log(`Found price: ${price}`); // logujem da mi ispise u testu 
            }
        });

        let actualTotal = prices.reduce((total, price) => total + price, 0);
        let expectedTotal = 55.97; 

        cy.log(`Calculated Total Price: ${actualTotal}`);

        expect(actualTotal).to.equal(expectedTotal); // assertujem da je actual total isti kao expect total
    });
  }
}

module.exports = new Functions();