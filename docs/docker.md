# Docker Compose

Preparei um arquivo para criar dois containers, um para o PgAdmin e outro para levantar um banco.

Para levantar esses containers basta executar o seguinte comando na pasta `docker/docker-compose.yml`

```
$ sudo docker-compose up -d
```

Para acessar o PgAdmin, basta abrir no navegador `localhost:16543`. O acesso dela é

```
Email: 'junioranzolin58@gmail.com'
Senha: 'PgAdminDockChallenge!'
```

É possivel fazer as operações pelo PgAdmmin, porem para acessar externamente, pelo dbeaver por exemplo, os dados de conexão são os seguintes:

```
Tipo de banco: PostgreSQL
Host: localhost,
Port: 15432,
Username: postgres,
Senha: DockChallenge!,
Database: postgres,
```

Para acessar pelo PgAdmin, basta adicionar usando os seguintes dados:

```
Tipo de banco: PostgreSQL
Host: postgres-compose,
Port: 5432,
Username: postgres,
Senha: DockChallenge!,
Database: postgres,
```
