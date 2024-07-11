const locators = require('../locatorsFlare/locators');

class Assertions {

  // login 

  verifyUrlContains(text) {
    cy.url().should('include', text);
  }

  verifyErrorMessageExist() {
    cy.get(locators.errorLogin).should('be.visible');
  }

  verifyErrorText(text) {
    cy.get(locators.errorLogin).should('contain.text', text);
  }

  verifyErrorColor() {
    cy.get(locators.errorLoginContainer).should('have.css', 'background-color', 'rgb(226, 35, 26)');
  }

  verifyUsernameVisuals() {
    cy.get(locators.usernameInput).should('have.css', 'font-family', '"DM Sans", Arial, Helvetica, sans-serif');
    cy.get(locators.usernameInput).should('have.css', 'font-size', '14px');
    cy.get(locators.usernameInput).should('have.css', 'width', '292px');
    cy.get(locators.usernameInput).should('have.css', 'text-align', 'start');
    cy.get(locators.usernameInput).should('have.attr', 'placeholder', 'Username');

  }

  verifyPasswordVisuals() {
  cy.get(locators.passwordInput).should('have.css', 'font-family', '"DM Sans", Arial, Helvetica, sans-serif');
  cy.get(locators.passwordInput).should('have.css', 'font-size', '14px');
  cy.get(locators.passwordInput).should('have.css', 'width', '292px');
  cy.get(locators.passwordInput).should('have.css', 'text-align', 'start');
  cy.get(locators.passwordInput).should('have.attr', 'placeholder', 'Password');

  }

  verifyLoginButtonVisuals() {
    cy.get(locators.loginButton).should('have.css', 'font-family', '"DM Sans", Arial, Helvetica, sans-serif');
    cy.get(locators.loginButton).should('have.css', 'font-size', '16px');
    cy.get(locators.loginButton).should('have.css', 'width', '292px');
    cy.get(locators.loginButton).should('have.css', 'text-align', 'center');
    cy.get(locators.loginButton).should('have.css', 'background-color', 'rgb(61, 220, 145)');
    cy.get(locators.loginButton).should('have.attr', 'value', 'Login');

  }



  // homepage images

  verifyImageBackpack() {
    cy.get(locators.inventoryItemBackpack).should('have.attr', 'src').and('include', '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg');
  }

  verifyImageBike() {
    cy.get(locators.inventoryItemBike).should('have.attr', 'src').and('include', '/static/media/bike-light-1200x1500.37c843b0.jpg');
  }

  verifyImageShirt() {
    cy.get(locators.inventoryItemShirt).should('have.attr', 'src').and('include', '/static/media/bolt-shirt-1200x1500.c2599ac5.jpg');
  }

  verifyImageJacket() {
    cy.get(locators.inventoryItemJacket).should('have.attr', 'src').and('include', '/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg');
  }

  verifyImageOnesie() {
    cy.get(locators.inventoryItemOnesie).should('have.attr', 'src').and('include', '/static/media/red-onesie-1200x1500.2ec615b2.jpg');
  }

  verifyImageAll() {
    cy.get(locators.inventoryItemAll).should('have.attr', 'src').and('include', '/static/media/red-tatt-1200x1500.30dadef4.jpg');
  }

}



  
module.exports = new Assertions();