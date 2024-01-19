const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/**/*.feature"
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochareports',
    overwrite: false,
    html: false,
    json: true,
  },
};
