# Correios 2.0

## Uma tela mais amigável dos correios

### Quem é esse tal de Cafesão :question:

Ola, o meu nome é Gabriel, apelido **Cafesão**.
Sou apenas um cara que **ama programar** e gosta de desafios, e desta vez o desafio foi atualizar um projeto antigo, usando a API do [ViaCEP](https://viacep.com.br/), só que agora com as tecnologias do React.

### Por que decidiu atualizar seu projeto antigo :question:

Como eu tive um contato mais profundo com React nestes últimos dias, decidi testar. em diversos projetos já criados, seja pela facilidade de implementar uma solução com esse frameworks, como também, usando para adquirir conhecimento, que na maioria das vezes se encontra nestas...atualizações.

### E como foi o desenvolvimento deste projeto :question:

Simples, usando os conceitos que eu aprendi em outros projetos e tendo um problema de ser relativamente parecido, eu consegui criar uma pagina em React, sem grandes dificuldades.

> Tenho que começar a ter mais criatividade nos visuais dos sites...

### E como faço para rodar :open_mouth:

Primeiramente você precisa ter o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.


Basta rodar o comando `docker build --tag correios_pesquisar:latest .` e depois `docker run -p 7070:7070 correios_pesquisar:latest`

Ou via [Docker-Compose](https://docs.docker.com/compose/install/), basta rodar o comando `docker-compose up --build`

Você pode acessar no link http://localhost:7070