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

  
}

module.exports = new Functions();