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

    // homepage items add to cart

    addToCartItemBackpack = '[data-test="add-to-cart-sauce-labs-backpack"]';
    addToCartItemBike = '[data-test="add-to-cart-sauce-labs-bike-light"]';
    addToCartItemShirt = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';

    // shopping cart 

    shoppingCartLink = '[data-test="shopping-cart-link"]';
    continueShopping = '[data-test="continue-shopping"]';
    checkout = '[data-test="checkout"]';
    cartFirstName = '[data-test="firstName"]';
    cartLastName = '[data-test="lastName"]';
    cartZip = '[data-test="postalCode"]';
    cartCancel = '[data-test="cancel"]';
    cartContinue = '[data-test="continue"]';
    cartContinueShopping = '[data-test="continue-shopping"]';
    cartFinish = '[data-test="finish"]';
    cartSuccess = '[data-test="complete-header"]';
    cartBackHome = '[data-test="back-to-products"]';
    cartBadge = '[data-test="shopping-cart-badge"]';
    cartRemoveBike = '[data-test="remove-sauce-labs-bike-light"]';
    cartRemoveBackpack = '[data-test="remove-sauce-labs-backpack"]';
    cartInventoryItems = '[data-test="inventory-item"]';

    // price 

    inventoryItemPrice = '[data-test="inventory-item-price"]';
    subtotalPrice = '[data-test="subtotal-label"]';
    taxPrice = '[data-test="tax-label"]';
    totalPrice = '[data-test="total-label"]';

    // homepage multiple pics

    imageAnyInventoryItem = '.inventory_item_img';
    tagiAttribute = 'input[type=email]'
    

};

module.exports = new Locators();
