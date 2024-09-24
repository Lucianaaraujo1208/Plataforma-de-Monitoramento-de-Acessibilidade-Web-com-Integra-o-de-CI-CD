// Importa a biblioteca cypress-axe
import 'cypress-axe';

describe('Teste de Acessibilidade CI', () => {
    it('Deve garantir que a página esteja acessível', () => {
        // Visite a página que você deseja testar
        cy.visit('/'); // Se a baseUrl for configurada, apenas coloque a rota

        // Injetar a biblioteca Axe na página
        cy.injectAxe(); 
        
        // Verificar a acessibilidade
        cy.checkA11y(); 
    });
});