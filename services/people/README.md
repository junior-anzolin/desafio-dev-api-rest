# Microseviço de contas

### Start

Para iniciar o projeto, após instalar as dependencias da pasta principal (`npm install na pasta principal`) e dos serviços (`npm run bootstrap na pasta principal`), basta executar `npm start` nesta pasta;

### Sobre este serviço

O microserviço people é utilizado para realizar ações na tabela `people` no banco como:

- Criar pessoa
- Visualizar pessoa
- Alterar pessoa
- Deletar pessoa

### Rotas

- `GET`
  - `/{idPessoa}`: Visualizar pessoa
- `POST`
  - `/`: Criar pessoa
- `PUT`
  - `/{idPessoa}`: Alterar pessoa
- `DELETE`
  - `/{idPessoa}`: Deletar pessoa

### Comentarios e tomadas de decisão

Para saber mais sobre a tomada de decisão pode visualizar o doc `comments`, ou [clicar aqui](../../docs/comments.md)
