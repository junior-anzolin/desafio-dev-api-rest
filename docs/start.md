# Iniciar projeto em ambiente dev

### APIs mapeadas no insomnia

As APIs foram testadas utilizando a ferramenta [Insomnia](https://insomnia.rest/), o arquivo com as APIs já contruidas pode ser [baixado aqui](insominia-map-apis.json).

### Estrutura em monorepo

```
├── docs
│   └── // Documentação do projeto
└── services
    ├── account
    │   └── // Microsserviço para manipulação de contas
    ├── people
    │   └── // Microsserviço para manipulação de pessoas
    ├── transaction
    │   └── // Microsserviço para manipulação de transações
    └── common
        └── /*
              Arquivos compartilhados entre os serviços
              (Migrations, conexão com banco, utils, entre outros)
            */
```

Para realizar a instalação de dependencias de todos os serviços, é necessário executar `npm install` na raiz do projeto e em seguida executar `npm run bootstrap`

Para iniciar iniciar o seviço no local, é necessário acessar a pasta desse serviço e executar o comando `npm start` ou `yarn start`;
