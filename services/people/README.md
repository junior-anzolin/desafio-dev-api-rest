# Microseviço de contas

### Start

Para iniciar o projeto, após instalar as dependencias da pasta principal (`npm install na pasta principal`) e dos serviços (`npm run bootstrap na pasta principal`), basta executar `npm start` nesta pasta;

### Sobre este serviço

O serviço people é utilizado para realizar ações na tabela `people` no banco como:

- Criar pessoa
- Visualizar pessoa
- Alterar pessoa
- Deletar pessoa

### Rotas

- `GET`
  - `/{idPessoa}`: Visualizar pessoa
- `POST`
  - `/`: Criar pessoa
    - Body exemplo:
      ```json
      {
        "nome": "Sophia Sônia Alice Castro",
        "cpf": "49991309632",
        "dataNascimento": "1970-01-01"
      }
      ```
- `PUT`
  - `/{idPessoa}`: Alterar pessoa
    - Body exemplo:
      ```json
      {
        "nome": "Sophia Sônia Alice Castro",
        "cpf": "49991309632",
        "dataNascimento": "1970-01-01"
      }
      ```
- `DELETE`
  - `/{idPessoa}`: Deletar pessoa

### Comentarios e tomadas de decisão

Para saber mais sobre a tomada de decisão pode visualizar o doc `comments`, ou [clicar aqui](../../docs/comments.md)
