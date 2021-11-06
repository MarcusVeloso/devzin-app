# Devzin
App frontend para gerenciar Developers

## Features
- Listar developers
- Cadastrar developer
- Editar developer
- Excluir developer
- Pesquisar developer

## Tech
Devzin utiliza o framework Angular

## Installation

Devzin requer:
- [Node.js](https://nodejs.org/) v14+
- [Angular](https://angular.io/cli) 9x

### Instale as dependências para iniciar o servidor.

```sh
$ npm install @angular/cli@9.1.12
```

### Acesse o projeto
```sh
$ cd devzin
````
### Instale as depenências
```sh
$ npm i
```

## Instalação manual da dependências
Caso tenha algum problema, instale as dependências:

```sh
Servidor de dados json
$ npm install -g json-server
```
```sh
Template bootstrap
$ ng add ngx-bootstrap
```

## Inicie os serviços
```sh
Inicie o serviço
ng serve
```
```sh
Inicie o serviço de base de dados
$ json-server --watch db.json

Acesse:
[Acesse a aplicação](http://localhost:4200/)

## License
MIT