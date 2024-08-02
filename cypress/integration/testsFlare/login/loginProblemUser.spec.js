const functions = require('../../../support/functionsFlare/functions');
const assertions = require('../../../support/assertionsFlare/assertions');

describe('Login Problem User', () => {

    it('Testing Problem User', () => {

      cy.visit('https://www.saucedemo.com/');

      
      functions.typeUsername('problem_user');
      functions.typePassword('secret_sauce');
      functions.clickSubmit();
      assertions.verifyUrlContains('https://www.saucedemo.com/inventory.html')

      // Asertovacu sve slike na stranici koje bi trebalo da se prikazu i test ce pasti, slike pitbulla nisu ocekivano ponasanje

      assertions.verifyImageBackpack()
      assertions.verifyImageBike()
      assertions.verifyImageJacket()
      assertions.verifyImageShirt()
      assertions.verifyImageOnesie()
      assertions.verifyImageAll()

      

      });
    
  });