const functions = require('../../../support/functionsFlare/functions');
const assertions = require('../../../support/assertionsFlare/assertions');

describe('Login Performance Glitch User', () => {

    it('Testing Performance Glitch User', () => {
      
        const startTime = new Date().getTime();

        cy.visit('https://www.saucedemo.com/');

        functions.typeUsername('performance_glitch_user');
        functions.typePassword('secret_sauce');
        functions.clickSubmit();
        cy.url().should('include', '/inventory.html');

        const endTime = new Date().getTime();
        const executionTime = endTime - startTime;

        cy.log('Execution time: ${executionTime} milliseconds');
        
        if (executionTime > 1) {
        cy.log('Warning: Performance issue detected.'); 
        
        // Mozemo da uradimo i cy.clock metodu da test padne ukoliko je load veci od npr 2 milisekunde

        // cy.clock();
        // const startTime = Date.now();
        // cy.visit('https://www.saucedemo.com/');
        // functions.typeUsername('performance_glitch_user');
        // functions.typePassword('secret_sauce');
        // functions.clickSubmit();
        // assertions.verifyUrlContains('https://www.saucedemo.com/inventory.html');
        // const stopTime = Date.now();
        // const executionTime = stopTime - startTime;
        // cy.clock().then(clock => {
        // clock.restore();
        // });
        // expect(executionTime).to.be.lessThan(2);
        }
    });
});