# PERSCOM

## ⚠️ Aviso ⚠️
> Este projeto foi criado para estudo, utilizando de boas práticas e também das más para objetivo de aprendizado e testes.
> A principal função deste projeto foi implementar e testar formas de autenticação e interação entre cliente e servidor.
> <br> <br>
> Pode-se verificar á utilização de diversas formas de chamada de API entre os componentes, aplicação de uma camada de services
> para a abstração da lógica de négocio que se encontraria nos controllers, Global error Handler e algumas más práticas no front-end com o objetivo
> de entender quais são os erros que eles podem ocasionar, principalmente na manutenção e organização do projeto além de
> testar algumas biblíotecas como DaisyUi e Redux-toolkit.

<img src="https://github.com/kaiotcp1/Perscom-laboratory/assets/31595749/43ab2762-7a35-4d93-9de6-ea171293cbaf" alt="drawing"/>


## Inicialização
Pré-requisitos: npm 

```bash
# clonar repositório
git clone https://github.com/kaiotcp1/Perscom-laboratory.git

# acessar pasta client
cd client

# acessar pasta server
cd server 

# instalar dependências
npm install

# executar o projeto
npm run dev  -> client
npm run server  -> server

```

## Ferramentas
* [Visual Studio Code](https://code.visualstudio.com) - IDE para desenvolvimento.

## Links importantes
* [ARMA III](https://code.visualstudio.com) - Jogo utilizado para o conceito da aplicação.
* [3ºInfantary](https://3rdinf.us/perscom/personnel/roster/1-personnel-files/) 
----
# Perscom

## Introdução

Fornecer um gerenciador de grupos e soldados para melhorar a eficiência operacional para jogos de Simulação Tática.

## Preview 
<img src="https://github.com/kaiotcp1/Perscom-laboratory/assets/31595749/2401c495-89ce-40a5-b865-74ad0e5575f1" alt="drawing" width="200"/>
<img src="https://github.com/kaiotcp1/Perscom-laboratory/assets/31595749/c269faeb-e6e6-43b5-9d16-01bacac7ae3c" alt="drawing" width="210"/>
<img src="https://github.com/kaiotcp1/Perscom-laboratory/assets/31595749/a311c3d4-2bdd-48c2-957d-6ace7250b01b" alt="drawing" width="223"/>
<img src="https://github.com/kaiotcp1/Perscom-laboratory/assets/31595749/96877dfe-a608-41a8-b933-2a18b075d20c" alt="drawing" width="233"/>

### Descrição do ambiente técnico
O sistema é composto por um banco de dados, uma interface web e uma api.

## Tecnologias utilizadas
### Back end
 - [x] Nodejs
 - [x] Express
 - [x] MongoDB
 - [x] Mongoose
 - [x] Bcrypt
 - [x] JWT
 - [x] Nodemon
-----
### Front end
 - [x] CSS / JS
 - [x] ReactJS
 - [x] React-router-dom
 - [x] Axios
 - [x] DaisyUi
 - [x] Redux/Redux Toolkit
 - [x] Tailwindcss
 - [x] Hooks
 - [ ] Dominar o mundo

## ENDPOINTS

### Auth
| Nome | Funcionalidade|
|------|--------------|
|```POST``` /api/v1/signup|Registra o usuário no sístema|
|```POST``` /api/v1/login|Faz o login no sístema|

### Soldier
| Nome | Funcionalidade|
|------|--------------|
|```POST``` /api/v1/soldier/id|Cria o soldado utilizando o id do usuário logado.|
|```GET``` /api/v1/soldier/|Informa todos soldados registrados no banco.|
|```GET``` /api/v1/soldier/id|Informa o soldado pertencente ao id no banco.|
|```PATCH``` /api/v1/soldier/id|Atualiza os dados do soldado pertencente ao id no banco.|
|```DELETE``` /api/v1/soldier/id|Deleta o soldado pertencente ao id no banco.|

### Squad
| Nome | Funcionalidade|
|------|--------------|
|```POST``` /api/v1/squad/id|Cria o squad utilizando o id do usuário logado.|
|```GET``` /api/v1/squad/|Informa todos os squads registrados no banco.|
|```GET``` /api/v1/squad/id|Informa o squad pertencente ao id no banco.|
|```PATCH``` /api/v1/squad/id|Atualiza os dados do squad pertencente ao id no banco.|
|```DELETE``` /api/v1/squad/id|Deleta o squad pertencente ao id no banco.|
