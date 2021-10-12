# Microseviço de contas

### Start

Para iniciar o projeto, após instalaçar as dependencias da pasta principal (`npm install na pasta principal`) e dos serviços (`npm run bootstrap na pasta principal`), basta executar `npm start` nesta pasta;

### Sobre este serviço

O microserviço account é utilizado para realizar ações na tabela `account` no banco como:

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
- `PUT`
  - `/deposit/{idConta}`: Depositar na conta
    - BODY: {value: number}
  - `/withdraw/{idConta}`: Sacar da conta
    - BODY: {value: number}
- `DELETE`
  - `/block/{idConta}`

### Comentarios e tomadas de decisão

Para saber mais sobre a tomada de decisão pode visualizar o doc `comments`, ou [clicar aqui](../../docs/comments.md)
