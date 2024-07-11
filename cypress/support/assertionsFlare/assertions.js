const locators = require('../locatorsFlare/locators');

class Assertions {

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

}



  
module.exports = new Assertions();