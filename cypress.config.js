const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      
    },
    specPattern: 'cypress/integration/testsFlare/**/*.{js,jsx,ts,tsx}', 
    supportFile: false
  }
});