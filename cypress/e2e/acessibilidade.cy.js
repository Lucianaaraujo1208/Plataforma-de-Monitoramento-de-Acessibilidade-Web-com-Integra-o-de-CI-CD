// Importa a biblioteca cypress-axe
import 'cypress-axe';

describe('Teste de Acessibilidade CI', () => {
    it('Deve garantir que a página esteja acessível', () => {
        // Visite a página que você deseja testar
        cy.visit('/'); // Altere se necessário

        // Injetar a biblioteca Axe na página
        cy.injectAxe(); 
        
        // Verificar a acessibilidade
        cy.checkA11y(); 

        cy.checkA11y(null, null, (violations) => {
            cy.log(violations);
    });
});

