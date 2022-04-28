# Capstone Q4 - Node Subscription API

Uma API em que o cliente poderá contratar um serviço mensal por meio de inscrição, onde terá direito de receber todo mês uma box de produtos de uma das três categorias escolhida por ele.
Após o cadastro, o cliente poderá fazer sua inscrição ao adquirir uma box, tendo acesso também a informações como um registro de box recebidas, histórico de pagamento, box atual e a escolha para o proximo mês. A empresa poderá cadastrar as escolhas do próximo mês,
e valores em estoque.

## Integrantes do grupo

- [Laudemir do Nascimento Junior](https://github.com/laudemirjunior)
- [Gabriel de Azevedo](https://www.github.com/azgabe)
- [Ivan Rowlands de Macedo](https://www.github.com/ivanrowlands)
- [Lourivan Rodrigues](https://www.github.com/lourivanluz)
- [Daniel Francisco](https://www.github.com/daniell18)
- [Fernanda Baia](https://github.com/Maria-baia)

## Funcionalidades

- Autenticação
- Registro e atualização de usuários
- Cadastro de produtos
- Cadastro de Box contendo produtos
- Arquivamento dos registros de compras
- Buscas por dados como usuarios, produtos e registros

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env;

- `PORT` onde rodará sua aplicação;
- `POSTGRES_DB` nome do banco de dados (em desenvolvimento);
- `POSTGRES_PASSWORD` senha do banco de dados (em desenvolvimento);
- `DATABASE_URL` url com as credenciais do banco (em produção);
- `SECRET_KEY` senha para criação de token de autenticação;
- `EXPIRES_IN` tempo de expiração do token gerado;
- `ADMIN_KEY` usado para permitir a criação de superusuario;

# Como usar os Endpoints

As rotas da aplicação podem ser dividas em três categorias básicas:

- Rotas públicas
- Rotas para clientes
- Rotas para Administrador

Recursos como a visualização das boxss e a criação de usuários podem
ser utilizados sem nenhum tipo de token de acesso, enquanto outros como a criação e vinculação do produto a uma box e alteração no usuário é necessario o envio do token

Esse tipo de validação é feita pelo envio de um Bearer Token no Header nas
requisições protegidas. Esse tokens seguem o padrão JSON Web Token e são gerados
automaticamente pela aplicação durante o login de um usuário.

Logo abaixo seguem exemplos de cada rota aceita pela aplicação, junto com seu
comportamento esperado, os campos necessários para sua utilização e o que será
retornado pelo servidor.

## Autenticação

Ao criar uma conta, a senha do usuário é haseada e registrada de forma segura no
banco de dados. Por padrão, um usuário será criado como **cliente** e não terá acesso
às rotas de **administrador**. Porém um **cliente** pode logar no site e, por meio do
token JWT retornado, realizar buscas nas boxs e adquirir o produto.

## Rotas

- [user](#postuserregister)
- [adress](#postuseraddressregister)
- [feedback](#getuserfeedback)
- [box](#postbox)
- [products](#postboxproduct)
- [payments](#postboxpayment)

### POST/user/register

#### Descrição

```
    - cria um novo usuario
```

_Envio:_

```json
{
    "name":string,
    "lastName":string,
    "email":string,
    "password":string,
    "cpf":string,
    "phone":string,
}​
```

_Resposta:_

```json

{
  "name":string,
  "lastName":string,
  "email":string,
  "cpf":string,
  "phone":string,
  "id":string,

}
```

### POST/user/login

#### Descrição

```
    - login do usuario registrado
```

_Envio:_

```json
{
  "email": string,
  "password": string
}​
```

_Resposta:_

```json
{
  "token": string
}
```

### PATCH/user/update

#### Descrição

```
    - Alteração dos dados do usuario
    - Necessário o envio do token
```

_Envio:_

```json
{
    "name":string,
    "lastName":string,
    "email":string,
    "cpf":string,
    "phone":string,
}​
```

_Resposta:_

```json
{
  "name":string,
  "lastName":string,
  "email":string,
  "cpf":string,
  "phone":string,
  "id":string,
}
```

### PATCH/update/admin/:id

#### Descrição

```
    - Torna um unsuário em administrador
    - Necessário o envio do token
    - O token deve ser de um administrador
```

_Envio:_

```json
{
  "key": {ADMIN_KEY},
  "admin": true
}​
```

_Resposta:_

```json
{
  "id":string,
  "name":string,
  "lastName":string,
  "email":string,
  "cpf":string,
  "phone":string,
  "address": <adress> | null,
}
```

### GET/user/profile

#### Descrição

```
    - Necessário o envio do token
    - Retorna os dados do usuario
```

_Envio:_

```
no body
```

_Resposta:_

```json
{
  "id":string,
  "name":string,
  "lastName":string,
  "email":string,
  "cpf":string,
  "phone":string,
  "address": <adress> | null,
}
```

### GET/user

#### Descrição

```
    - Necessário o envio do token
    - O token deve ser de um administrador
    - Retorna lista dos usuario cadastrados
```

_Envio:_

```
no body
```

_Resposta:_

```json
[
  {
  "id":string,
  "name":string,
  "lastName":string,
  "email":string,
  "cpf":string,
  "phone":string,
  "address": <adress> | null,
  }
]
```

### POST/user/address/register

#### Descrição

```
    - Necessário o envio do token
    - Cria um endereço e o vincula ao usuario solicitante
```

_Envio:_

```json
{
  "street": string,
  "number": string,
  "complement": string,
  "district": string,
  "cep": string,
  "city": string,
  "state": string,
}
```

_Resposta:_

```json
{
  "street":string,
  "number":string,
  "complement":string,
  "district":string,
  "cep":string,
  "city":string,
  "state":string,
  "id":string,
}
```

### PATCH/user/address/register

#### Descrição

```
    - Necessário o envio do token
    - Atualiza o endereço do usuario solicitante
```

_Envio:_

```json
{
  "street": string,
  "number": string,
  "complement": string,
  "district": string,
  "cep": string,
  "city": string,
  "state": string,
}
```

_Resposta:_

```json
{
  "id":string,
  "street":string,
  "number":string,
  "complement":string,
  "district":string,
  "cep":string,
  "city":string,
  "state":string,
}
```

### POST/user/feedback

#### Descrição

```
    - Necessário o envio do token
    - Cria um feedack e o vincula ao usuario solicitante
```

_Envio:_

```json
{
  "content": string,
	"rating": number,
}
```

_Resposta:_

```json
{
  "id":string,
  "content":string,
  "rating":number,
  "user":<user>
}
```

### GET/user/feedback?

#### Descrição

```
    - Necessário o envio do token
    - O token deve ser de um administrador
    - Query params opcionais aceitos são:
      user:uui do usuario - retornara todos feedback daquele usuário
      content:string - retornará todos feedback que contenha aquela palavra
      rating:number - retornará todos feedaback com o rating passado
    - Caso nao seja passado um parametro retornará todos feedbacks
```

_Envio:_

```
no body
```

_Resposta:_

```json
[
  {
    "id":string,
    "content":string,
    "rating":number,
    "user":<user>
  }
]
```

### POST/box

#### Descrição

```
    - Necessário o envio do token
    - O token deve ser de um administrador
    - Cria uma box
```

_Envio:_

```json
{
	"title":string,
	"month":string,
}
```

_Resposta:_

```json
{
  "id":string,
  "title":string,
  "month":string,
}
```

### GET/box

#### Descrição

```
  - Retorna uma lista contendo todas as boxs
```

_Envio:_

```
no body
```

_Resposta:_

```json
[
  {
    "id":string,
    "title":string,
    "month":string,
    "products": [<products>],
  }
]
```

### POST/box/product

#### Descrição

```
  - Necessário o envio do token
  - O token deve ser de um administrador
  - Cria um produto e o vincula a uma box
```

_Envio:_

```json
{
  "title":string,
  "description":string,
  "boxId":string,
}
```

_Resposta:_

```json
{
  "id":string,
  "title":string,
  "description":string,
}
```

### GET/box/product?

#### Descrição

```
  - Query params aceito aceitos é:
      id:uui do produto - retorna o produto com o id enviado
  - Caso nao seja passado um parametro retornará todos produtos
```

_Envio:_

```
no body
```

_Resposta:_

```json
[
  {
    "id":string,
    "title":string,
    "description":string,
  }
]
```

### POST/box/product

#### Descrição

```
  - Necessário o envio do token
  - O token deve ser de um administrador
  - Cria um produto e o vincula a uma box
```

_Envio:_

```json
{
  "title":string,
  "description":string,
  "boxId":string,
}
```

_Resposta:_

```json
{
  "id":string,
  "title":string,
  "description":string,
}
```

### POST/box/payment

#### Descrição

```
  - Necessário o envio do token
  - Registra um pagamento e o vincula a uma box e ao usuário solicitante
```

_Envio:_

```json
{
  "method":string,
  "total":number,
  "boxId":string,
}
```

_Resposta:_

```json
{
  "id":string,
  "date":string,
  "method":string,
  "total": number,
  "user": <user>,
  "box": <box>
}
```

### GET/box/payment

#### Descrição

```
  - Necessário o envio do token
  - O token deve ser de um administrador
  - Traz os dados de pagamentos
  - Query params aceito aceitos é:
      id:uui do pedido - retorna o pedido com o id enviado
  - Caso nao seja passado um parametro retornará todos os pagamentos
```

_Envio:_

```
no body
```

_Resposta:_

```json
[
  {
  "id":string,
  "date":string,
  "method":string,
  "total": number,
  "user": <user>,
  "box": <box>
 }
]
```

### GET/box/payment/user

#### Descrição

```

- Necessário o envio do token
- Traz os pagamentos do usuário solicitante

```

_Envio:_

```
no body
```

_Resposta:_

```json
[
  {
  "id":string,
  "date":string,
  "method":string,
  "total": number,
  "user": <user>,
  "box": <box>
 }
]
```
