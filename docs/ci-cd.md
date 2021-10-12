# Circle CI

Tomei a decisão de utilizar o CircleCI no CI/CD do projeto por maior experiencia de uso.

Dentro do script que estou utilizando, quando configurado corretamente, o Circle CI irá realizar as seguintes etapas:

### Ações que o script excuta:

- build
  - Cria um novo container.
  - Checkout para a branch.
  - Instalação de denpendencias.
  - Caso haja uma nova versão, ou não haja cache de dependencias, será salvo um novo ou atualizado o atual.
  - Checagem de lint.
  - Checagem de prettier.
  - Executa os testes.
  - Armazena os dados dos testes.
- deploy qa
  - Cria um novo container.
  - Checkout para a branch.
  - Recupera o cache de dependencias.
  - Instala a cli de serverless.
  - Define as váriaveis de authenticação de deploy.
  - Instala a cli da AWS.
  - Define o arquivo o environment para qa
  - Executa o comando `yarn deploy:qa` que vai realizar o deploy utilizando o comando configurado no package de cada service no script `deploy`
- deploy prod
  - Cria um novo container.
  - Checkout para a branch.
  - Recupera o cache de dependencias.
  - Instala a cli de serverless.
  - Define as váriaveis de authenticação de deploy.
  - Instala a cli da AWS.
  - Define o arquivo o environment para prod
  - Executa o comando `yarn deploy:prod` que vai realizar o deploy utilizando o comando configurado no package de cada service no script `deploy:prod`

### Branch Master

Quando um novo commit for detectado na branch master, é excutado de forma sincrona a etapa `build` e `deploy qa`;

### Outras branches

Quando um novo commit for detectado em qualquer branch que não seja a master, é executado apenas a etapa `build`;

### Nova tag

Quando uma nova tag é criada com o nome v0.0.0 por exemplo é ativado o script de deploy em produção que excuta de forma sincrona a etapa `build` e `deploy prod`;
