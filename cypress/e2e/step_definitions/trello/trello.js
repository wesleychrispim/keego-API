import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

let apiResponse;

Given('que eu envio um GET para a API do Trello', () => {
  // Adicione sua lógica para enviar uma solicitação GET para a API do Trello aqui
  // Certifique-se de atribuir a resposta à variável apiResponse
  cy.request('https://api.trello.com/1/actions/592f11060f95a3d3d46a987a').then(response => {
    apiResponse = response;
  });
});

Then('o campo {string} da lista deve ser exibido corretamente', fieldName => {
  // Adicione sua lógica para verificar se o campo específico da lista está correto
  const fieldValue = apiResponse.body.data.list.name;
  cy.log(`Conteúdo do campo "${fieldName}": ${fieldValue}`);
  // Aqui você pode adicionar verificações específicas com cy.should conforme necessário
});

Then('o status code da resposta deve ser {int}', expectedStatusCode => {
  // Adicione sua lógica para verificar se o status code da resposta está correto
  const actualStatusCode = apiResponse.status;
  cy.log(`Status Code da resposta: ${actualStatusCode}`);
  cy.wrap(actualStatusCode).should('eq', expectedStatusCode);
});
