# Correios 2.0
## Uma tela mais amigável dos correios

### Quem é esse tal de Cafesão :question:

Ola, o meu nome é Gabriel, apelido **Cafesão**.
Sou apenas um cara que **ama programar** e gosta de desafios, e desta vez o desafio foi atualizar um projeto antigo, usando a API do [ViaCEP](https://viacep.com.br/), só que agora com as tecnologias do React e React Native(React Native num futuro próximo, aguardem...)

### Por que decidiu atualizar seu projeto antigo :question:

Como eu tive um contato mais profundo com React e React Native nestes últimos dias, decidi testar os dois, em diversos projetos já criados, seja pela facilidade de implementar uma solução com esses dois frameworks, como também, usando para adquirir conhecimento, que na maioria das vezes se encontra nestas...atualizações.

### E como foi o desenvolvimento deste projeto :question:

Simples, usando os conceitos que eu aprendi em outros projetos e tendo um problema de ser relativamente parecido, eu consegui criar uma pagina em React e um App em React Native, sem grandes dificuldades.

> Tenho que começar a ter mais criatividade nos visuais dos sites e dos Apps...

### E como faço para rodar :open_mouth:

Primeiramente você precisa ter o [Yarn](https://yarnpkg.com/pt-BR/) instalado, junto com o [Node.JS](https://nodejs.org/pt-br/).

Feito isso e verificado se o Yarn e o Node.JS esta devidamente instalado, e só entrar nas pastas do 'frontend', 'backend' e 'mobile' via terminal e colocar o comando `yarn install`, feito isso ele ira instalar todas as dependências. (**O esperado é esse, mas...nunca se sabe**)

Explicação do comando:

>O comando yarn install é usado para instalar todas as dependências de um projeto. As dependências são recuperadas do arquivo package.json do seu projeto, e armazenadas no arquivo yarn.lock.

Depois de ter instalado as dependências e só colocar `yarn dev` dentro da pasta do 'backend', `yarn start` na pasta do 'frontend' e `yarn react-native run-android` na pasta do 'mobile'.
No caso do mobile, não esqueça de executar `npx react-native init [NOME_DO_APP]`, para que ele baixe os arquivos para rodar, tanto no Android, quanto no Iphone.

Caso algum erro aconteça no 'frontend', execute `yarn create react-app [NOME_DO_APP]` e apenas realoque as pastas e apague os arquivos que você não ira usar.