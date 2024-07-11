class Locators {
    
    // login

    usernameInput = '[data-test="username"]';
    passwordInput = '[data-test="password"]';
    loginButton = '[data-test="login-button"]';
    errorLogin = '[data-test="error"]';
    errorLoginContainer = '.error-message-container';

    // homepage images

    inventoryItemBackpack = '[data-test="inventory-item-sauce-labs-backpack-img"]';
    inventoryItemBike = '[data-test="inventory-item-sauce-labs-bike-light-img"]';
    inventoryItemShirt = '[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]';
    inventoryItemJacket = '[data-test="inventory-item-sauce-labs-fleece-jacket-img"]';
    inventoryItemOnesie = '[data-test="inventory-item-sauce-labs-onesie-img"]';
    inventoryItemAll = '[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]';

};

module.exports = new Locators();
