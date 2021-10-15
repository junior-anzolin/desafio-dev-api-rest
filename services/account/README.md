# Microseviço de contas

### Start

Para iniciar o projeto, após instalaçar as dependencias da pasta principal (`npm install na pasta principal`) e dos serviços (`npm run bootstrap na pasta principal`), basta executar `npm start` nesta pasta;

### Sobre este serviço

O serviço account é utilizado para realizar ações na tabela `account` no banco como:

- Criar conta
- Depositar na conta
- Consultar saldo da conta
- Sacar da conta
- Bloquear a conta

### Rotas

- `GET`
  - `/{idConta}`: Consultar saldo
- `POST`
  - `/`: Criar conta
    - Body exemplo:
      ```json
      {
        "idPessoa": "62bdf6f1-63ae-42a4-8061-9724aef632e9",
        "limiteSaqueDiario": 10,
        "tipoConta": "CONTA_CORRENTE" || "CONTA_POUPANCA" || "CONTA_SALARIO"
      }
      ```
- `PUT`
  - `/deposit/{idConta}`: Depositar na conta
    - BODY: `{ value: number }`
  - `/withdraw/{idConta}`: Sacar da conta
    - BODY: `{ value: number }`
- `DELETE`
  - `/block/{idConta}`

### Comentarios e tomadas de decisão

Para saber mais sobre a tomada de decisão pode visualizar o doc `comments`, ou [clicar aqui](../../docs/comments.md)

### Testes

Para executar os testes, basta executar o comando `npm run test`;

A cobertura atual dos testes nesse serviço é
| File | % Stmts | % Branch | % Funcs | % Lines |
|------------------------|---------|----------|---------|---------|
| All files | 100 | 100 | 100 | 100 |
| account.controller.ts | 100 | 100 | 100 | 100 |
| account.service.ts | 100 | 100 | 100 | 100 |
