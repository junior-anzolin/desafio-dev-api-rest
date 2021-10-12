# Comentários sobre decisões

- Para inicio mais ágil do desenvolvimento, tomei a liberdade de utilizar uma estrutura de pastas em monorepo que desenvolvi.
- Escolhi a utilização de monorepo (Um repositório para todos os seviços) para além da centralização, compartilhar códigos entre os serviços.
- Escolhi o banco de dados PostgreSQL pois há relacionamento entre tabelas e tenho conhecimento para utilização.
- Para o nome das colunas e entidades do banco, como estava descrito no desafio que o nome das colunas seriam em português, decidi seguir o que o desafio pediu, mas dentro do sistema preferi manter em inglês.
- O ID sequencial é menos seguro, portanto, decidi utilizar o UUID que é uma string gerada de forma aleatória, o que gera maior segurança.

## Microsserviço `Account`

- Tomei a liberdade de utilizaros seguintes métodos:
  - `GET` para consulta de saldo por ser apenas uma rota que retorna valores;
  - `POST` para criação da conta por ser uma ação de criar.
  - `PUT` para depósito e saque por ser ações de alteração da conta;
  - `DELETE` para bloqueio da conta por ser uma ação de bloqueio da conta, quase como um delete. Poderia ser implementada no metodo `PUT` também, mas como não há nada sendo enviado no Body, acredito que o `DELETE` é mais adequado.

> Apesar de as operações de `Depósito` e `Saque` serem transações e caberem corretamente dentro do microsserviço de `Transações` o principal identificador é o `idConta` e realiza a principal ação na tabela `account`. Portanto ele esta presente no microsserviço de `Conta` e faz a comunicação com o serviço de `Transação` para armazenamento do histórico de transações;

> No `tipoConta` preferi utilizar um enum para melhor organização e validação do valor. Essa alteração não necessáriamente inválida o uso de números, afinal ainda é possivel utilizar desse recurso mesmo com Enum, mas nesse caso, acredito que a string fica melhor aplicada.
