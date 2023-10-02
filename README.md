> Repositório de projeto Back-End desenvolvido em NodeJs para vaga de Desenvolvedor Jr na Corelab.
 <br />
 
 
 # Core Notes 📒

***➡ Para acessar o Front End dessa aplicação: [Clique aqui](https://github.com/brenofigueiredoo/corelab-front-end-challenge)***

<br />

* ***Apresentação do uso da API com o Front End*** => [Clique aqui](https://www.loom.com/share/8b5b55b9a524487fa0c3447525f5cc28?sid=0c462121-af5c-4140-8314-caf138107b34) e confira a proposta do projeto.

* ***Diagrama ER*** => [Clique aqui](https://github.com/brenofigueiredoo/corelab-back-end-challenge/blob/main/diagrama.png) e acesse o diagrama do Projeto.

<br />

### Rodando localmente:
1. Faça o clone da do repósitorio e acesse a pasta clonada.
```shell
git clone https://github.com/brenofigueiredoo/corelab-back-end-challenge.git

cd corelab-back-end-challenge
```
2. Instale todas as dependências.
```
yarn install
```
3. Configure o ambiente virtual no arquivo: .env

4. Rode a aplicação.
```
yarn dev
```
Para acessar a aplicação utilize: [localhost:3000](localhost:3000)
&nbsp;

## Documentação da API

### 1. Users

#### 1.1 Criar Usuário
- Endpoint: `POST /users`

Cria um novo usuário. Deve enviar um JSON no corpo da requisição com os seguintes campos:
```json
{
  "name": "Nome do Usuário",
  "email": "email@dominio.com",
  "password": "senha123"
}
```

#### 1.2 Listar Usuários
- Endpoint: `GET /users`
- O token de acesso deve ser incluído no cabeçalho da requisição

Retorna uma lista de todos os usuários cadastrados.

#### 1.3 Detalhes do Usuário
- Endpoint: `GET /users/{id}`
- O token de acesso deve ser incluído no cabeçalho da requisição

Retorna os detalhes do usuário com o ID especificado se for o mesmo usuário logado.

#### 1.4 Atualizar Usuário
- Endpoint: `PATCH /users/{id}`
- O token de acesso deve ser incluído no cabeçalho da requisição

Atualiza as informações do usuário com o ID especificado se for o mesmo usuário logado. Deve enviar um JSON no corpo da requisição com os campos que deseja atualizar.

#### 1.5 Deletar Usuário
- Endpoint: `DELETE /users/{id}`
- O token de acesso deve ser incluído no cabeçalho da requisição

Exclui o usuário com o ID especificado se for o mesmo usuário logado.

### 2. Login
#### 2.1 Autenticar Usuário
- Endpoint: `POST /login

Autentica um usuário e retorna um token de acesso. Deve enviar um JSON no corpo da requisição com os seguintes campos:
```json
{
  "email": "email@dominio.com",
  "password": "senha123"
}
```

### 3. Notes
#### 3.1 Criar Nota para um Usuário
- Endpoint: `POST /notes`
- O token de acesso deve ser incluído no cabeçalho da requisição

Cria uma nova nota para o usuário logado. Deve enviar um JSON no corpo da requisição com os seguintes campos:
```json
{
  "title": "Nova Nota",
  "is_favorite": false
}
```

#### 3.2 Listar Notas de um Usuário
- Endpoint: `GET /notes`
- O token de acesso deve ser incluído no cabeçalho da requisição

Retorna uma lista de todas as notas associadas ao usuário logado.

#### 3.3 Atualizar Nota
- Endpoint: `PATCH /notes/{id}`
- O token de acesso deve ser incluído no cabeçalho da requisição

Atualiza as informações da nota com o ID especificado se pertencer ao usuário logado. Deve enviar um JSON no corpo da requisição com os campos que deseja atualizar:
```json
{
  "title": "Academia",
  "is_favorite": true,
  "color": "AQUAMARINE",
}
```

#### 3.4 Deletar Nota
- Endpoint: `DELETE /notes/{id}`
- O token de acesso deve ser incluído no cabeçalho da requisição

Exclui a nota com o ID especificado se pertencer ao usuário logado.

## Ferramentas utilizadas 🛠 

 <img align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"> <img align="center" alt="TypeScript" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg">
 <img align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"> <img align="center" alt="github" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg">
 <img align="center" alt="github" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg">
 <img align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"> 

&nbsp;


## Contribuintes ✨

Função   | Membro
--------- | ------
Developer | [Breno S. Figueiredo](https://www.linkedin.com/in/brenosfigueiredo/)
