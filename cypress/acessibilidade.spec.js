describe('Teste de Acessibilidade', () => {
    it('Deve garantir que a página esteja acessível', () => {
        // Visite a página que você deseja testar
        cy.visit('https://github.com/Lucianaaraujo1208/Plataforma-de-Monitoramento-de-Acessibilidade-Web-com-Integra-o-de-CI-CD.git'); // Substitua pelo URL do seu site
        
        // Verifique a acessibilidade
        cy.injectAxe(); // Isso injetará a biblioteca Axe
        cy.checkA11y(); // Isso executa a verificação de acessibilidade.
    });
});