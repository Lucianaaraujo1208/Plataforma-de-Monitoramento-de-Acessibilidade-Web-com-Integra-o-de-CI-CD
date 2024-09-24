const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        specPattern: "cypress/e2e/**/*.cy.js", // Padrão de especificação
        baseUrl: 'http://exemplo.com',         // Coloque o URL correto do seu site
    },
});