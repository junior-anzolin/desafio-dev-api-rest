# Iniciar projeto em ambiente dev

### APIs mapeadas no insomnia

As APIs foram testadas utilizando a ferramenta [Insomnia](https://insomnia.rest/), o arquivo com as APIs já contruidas pode ser [baixado aqui](insominia-map-apis.json).

### Estrutura em monorepo

```
├── docs
│   └── // Documentação do projeto
└── services
    ├── account
    │   └── // Serviço para manipulação de contas
    ├── people
    │   └── // Serviço para manipulação de pessoas
    ├── transaction
    │   └── // Serviço para manipulação de transações
    └── common
        └── /*
              Arquivos compartilhados entre os serviços
              (Migrations, conexão com banco, utils, entre outros)
            */
```

Para realizar a instalação de dependencias de todos os serviços, é necessário executar `npm install` na raiz do projeto e em seguida executar `npm run bootstrap`

Para iniciar iniciar o seviço no local, é necessário acessar a pasta desse serviço e executar o comando `npm start` ou `yarn start`;

### Conexão com o banco de dados

Após levantar o banco de dados, é necessário inserir as configurações do mesmo nos arquivos, caso tenha levantado o banco utilizando o [Docker Compose](docker.md), o banco já esta configurado. Por ser um desafio e não haver um ambiente de testes e produção, não preparei o projeto para rodar as migrations em mais de um ambiente, mas isso pode ser feito.

Vamos lá. Para conexão da aplicação é necessário inserir os dados de conexão do banco no arquivo `services/common/src/environment/config.example.ts`, para configurar a conexão de produção o repositório já vem preparado com os arquivos de environment que serão manipulados no momento do deploy na lambda.

Para a conexão do TypeOrm, que será utilizada no momento de rodas as migrations e criar as tabelas, é necessário alterar o arquivo `services/common/ormconfig.json`.

### Migrations

Para executar as migrations, basta acessar o serviço `common` no caminho `services/common` e dentro dele executar `npm run typeorm:migration:run`;
