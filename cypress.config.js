const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",  // Ajusta o padrão de especificação
    baseUrl: 'http://exemplo.com',          // Coloque o URL do seu site
  },
});