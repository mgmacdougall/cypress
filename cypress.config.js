const {defineConfig} = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: '[name].json',
    overwrite: true,
    html: false,
    json: true
  },
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    supportFile: false,
    setupNodeEvents(on, config) {}
  }
});
