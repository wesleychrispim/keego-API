Feature: Teste de API no Trello

  Scenario: Enviar um GET para a API do Trello
    Given que eu envio um GET para a API do Trello
    Then o campo "name" da lista deve ser exibido corretamente
    And o status code da resposta deve ser 200
