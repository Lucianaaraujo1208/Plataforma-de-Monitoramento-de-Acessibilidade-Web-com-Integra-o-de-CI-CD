describe('Exemplo de teste', () => {
    it('Deve visitar a página inicial', () => {
      cy.visit('http://localhost:3000'); // Altere a URL para a sua aplicação
      cy.contains('Texto da sua página'); // Altere para algo que você espera na página
    });
  });