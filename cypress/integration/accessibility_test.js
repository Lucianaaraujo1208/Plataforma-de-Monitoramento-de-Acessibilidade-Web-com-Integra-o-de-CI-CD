// Importar axe-core no Cypress
import 'cypress-axe';

describe('Acessibilidade Web', () => {
  it('Testa acessibilidade da página inicial', () => {
    cy.visit('https://seu-site.com');  // Altere para o site que você deseja testar
    cy.injectAxe();  // Injeta o axe-core
    cy.checkA11y();  // Checa acessibilidade
  });
});