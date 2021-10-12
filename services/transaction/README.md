# Microseviço de transações

### Start

Para iniciar o projeto, após instalaçar as dependencias da pasta principal (`npm install na pasta principal`) e dos serviços (`npm run bootstrap na pasta principal`), basta executar `npm start` nesta pasta;

### Sobre este serviço

O serviço 'transaction' é utilizado para realizar ações na tabela `transaction` no banco como:

- Realizar uma nova transação
- Recuperar extrato de trasaçãoes

### Rotas

- `GET`
  - `/{idConta}`: Consultar extrato de transações
    - Query params exemplo:
      ```text
        filterDay: 2021-10-11
        page: 0
        max: 5
      ```

### Comentarios e tomadas de decisão

Para saber mais sobre a tomada de decisão pode visualizar o doc `comments`, ou [clicar aqui](../../docs/comments.md)
